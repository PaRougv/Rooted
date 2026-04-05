import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { User } from "../models/user.model.js"; 
import { ENV } from "../config/env.js";

const isProduction = ENV.NODE_ENV === "production";

const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    ENV.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

const getCookieOptions = () => ({
  httpOnly: true,
  secure: isProduction,
  sameSite: isProduction ? "none" : "strict",
  maxAge: 7 * 24 * 60 * 60 * 1000,
});

const createPasswordResetToken = () => {
  const token = crypto.randomBytes(32).toString("hex");
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  return { token, hashedToken };
};

const sendPasswordResetEmail = async ({ to, resetLink }) => {
  if (!ENV.RESEND_API_KEY || !ENV.EMAIL_FROM) {
    return false;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ENV.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: ENV.EMAIL_FROM,
      to: [to],
      subject: "Reset your Rooted password",
      html: `
        <p>You requested a password reset for Rooted.</p>
        <p><a href="${resetLink}">Reset your password</a></p>
        <p>This link expires in 1 hour.</p>
        <p>If you did not request this, you can ignore this email.</p>
      `,
    }),
    signal: AbortSignal.timeout(15000),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Email delivery failed: ${message}`);
  }

  return true;
};


export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name?.trim() || !email?.trim() || !password) {
      return res.status(400).json({ message: "Name, email and password are required" });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    const existingUser = await User.findOne({ email: email.toLowerCase().trim() });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
    });

    const token = generateToken(user._id);

    res.cookie("token", token, getCookieOptions());

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "User with this email already exists" });
    }
    console.error("Register error:", error);
    res.status(500).json({ message: error.message || "Registration failed" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email?.trim() || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id);

    res.cookie("token", token, getCookieOptions());

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: error.message || "Login failed" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("token", "", {
      ...getCookieOptions(),
      expires: new Date(0),
      maxAge: 0,
    });

    res.status(200).json({ message: "Logged out successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Forgot Password - Generate reset token
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email?.trim()) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user) {
      // Don't reveal if email exists for security
      return res.status(200).json({ message: "If an account exists, a reset link has been sent" });
    }

    const { token, hashedToken } = createPasswordResetToken();

    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpires = new Date(Date.now() + 3600000); // 1 hour
    await user.save();

    const resetLink = `${ENV.APP_BASE_URL.replace(/\/$/, "")}/reset-password?token=${token}`;
    const emailSent = await sendPasswordResetEmail({
      to: user.email,
      resetLink,
    }).catch((error) => {
      console.error("Password reset email error:", error.message);
      return false;
    });

    const response = {
      message: emailSent
        ? "If an account exists, a reset link has been sent"
        : "Password reset requested. Email delivery is not configured.",
    };

    if (!emailSent && !isProduction) {
      console.log(`[Password Reset] ${user.email}: ${resetLink}`);
    }

    if (ENV.ALLOW_INSECURE_RESET_TOKEN_RESPONSE && !isProduction) {
      response.debugResetToken = token;
      response.debugResetLink = resetLink;
      response.message = "Password reset token generated for local development";
    }

    res.status(200).json(response);

  } catch (error) {
    console.error("Forgot password error:", error);
    res.status(500).json({ message: error.message || "Failed to process request" });
  }
};

// Reset Password - Use token to set new password
export const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    if (!token || !newPassword) {
      return res.status(400).json({ message: "Token and new password are required" });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: new Date() }
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired reset token" });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update password and clear reset token
    user.password = hashedPassword;
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;
    await user.save();

    res.status(200).json({ message: "Password reset successfully" });

  } catch (error) {
    console.error("Reset password error:", error);
    res.status(500).json({ message: error.message || "Failed to reset password" });
  }
};
