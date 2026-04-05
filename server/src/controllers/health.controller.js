import mongoose from "mongoose";
import Anthropic from "@anthropic-ai/sdk";
import { HealthData } from "../models/healthdata.model.js";
import { ScanHistory } from "../models/scanHistory.model.js";
import { ENV } from "../config/env.js";

const serializeProfile = (doc) => ({
  id: doc._id.toString(),
  name: doc.name,
  weight: doc.weight,
  height: doc.height,
  bloodPressure: doc.bloodPressure,
  heartRate: doc.heartRate,
  anyOtherCondition: doc.anyOtherCondition,
  medications: doc.medications || []
});

export const createProfile = async (req, res) => {
  try {
    const userId = req.user?.id;
    console.log("Creating profile for user:", userId);
    console.log("Request body:", req.body);
    
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const {
      name,
      weight,
      height,
      bloodpressure,
      heartrate,
      anyothercondition,
      medications
    } = req.body;

    if (!name?.trim()) {
      return res.status(400).json({ message: "Name is required" });
    }

    const healthData = {
      user: userId,
      name: name.trim(),
      weight: weight ? Number(weight) : undefined,
      height: height ? Number(height) : undefined,
      bloodPressure: bloodpressure,
      heartRate: heartrate ? Number(heartrate) : undefined,
      anyOtherCondition: anyothercondition,
      medications: Array.isArray(medications) ? medications : undefined
    };
    
    console.log("Creating health data:", healthData);

    const health = await HealthData.create(healthData);
    console.log("Created health:", health);

    return res.status(201).json({
      message: "Profile created successfully",
      data: serializeProfile(health)
    });
  } catch (error) {
    console.error("Create profile error:", error);
    console.error("Error stack:", error.stack);
    res.status(500).json({ message: "Failed to create profile", error: error.message });
  }
};

const isValidProfileId = (id) => id && mongoose.isValidObjectId(id);

export const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });
    if (!isValidProfileId(id)) return res.status(400).json({ message: "Invalid profile ID" });

    const {
      name,
      weight,
      height,
      bloodpressure,
      heartrate,
      anyothercondition,
      medications
    } = req.body;

    const health = await HealthData.findOneAndUpdate(
      { _id: id, user: userId },
      {
        ...(name !== undefined && { name: name?.trim() }),
        ...(weight !== undefined && { weight: weight ? Number(weight) : undefined }),
        ...(height !== undefined && { height: height ? Number(height) : undefined }),
        ...(bloodpressure !== undefined && { bloodPressure: bloodpressure }),
        ...(heartrate !== undefined && { heartRate: heartrate ? Number(heartrate) : undefined }),
        ...(anyothercondition !== undefined && { anyOtherCondition: anyothercondition }),
        ...(medications !== undefined && { medications: Array.isArray(medications) ? medications : [] })
      },
      { returnDocument: "after" }
    );

    if (!health) {
      return res.status(404).json({ message: "Profile not found" });
    }

    return res.status(200).json({
      message: "Profile updated successfully",
      data: serializeProfile(health)
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update profile" });
  }
};

export const deleteProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });
    if (!isValidProfileId(id)) return res.status(400).json({ message: "Invalid profile ID" });

    const result = await HealthData.findOneAndDelete({ _id: id, user: userId });
    if (!result) {
      return res.status(404).json({ message: "Profile not found" });
    }

    await ScanHistory.deleteMany({
      user: userId,
      familyMemberId: result._id,
    });

    return res.status(200).json({ message: "Profile deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete profile" });
  }
};

export const getProfiles = async (req, res) => {
  try {
    const userId = req.user.id;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const profiles = await HealthData.find({ user: userId }).sort({ createdAt: 1 });
    return res.status(200).json({
      message: "Profiles fetched",
      data: profiles.map(serializeProfile)
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch profiles" });
  }
};

export const llmOutput = async (req, res) => {
    try {
        const { familyMemberId, plantName, safetyRating, warnings, medicinalUses } = req.body;
        const userId = req.user?.id;

        if (!familyMemberId) {
            return res.status(400).json({ success: false, message: "familyMemberId is required" });
        }

        if (!ENV.ANTHROPIC_API_KEY) {
            return res.status(503).json({ success: false, message: "AI summary service is not configured. Add ANTHROPIC_API_KEY to server/.env" });
        }

        const familyMember = await HealthData.findOne({ _id: familyMemberId, user: userId });
        if (!familyMember) {
            return res.status(404).json({ success: false, message: "Family member not found" });
        }

        const profileLines = [
            `Name: ${familyMember.name}`,
            familyMember.weight     ? `Weight: ${familyMember.weight} kg`           : null,
            familyMember.height     ? `Height: ${familyMember.height} cm`           : null,
            familyMember.bloodPressure ? `Blood pressure: ${familyMember.bloodPressure}` : null,
            familyMember.heartRate  ? `Heart rate: ${familyMember.heartRate} bpm`   : null,
            familyMember.anyOtherCondition ? `Health conditions: ${familyMember.anyOtherCondition}` : null,
        ].filter(Boolean).join("\n");

        let userMessage;
        if (plantName) {
            const warningText = (warnings || []).length > 0
                ? `Key warnings:\n${(warnings || []).map(w => `- ${w}`).join("\n")}`
                : "No specific warnings flagged.";
            const usesText = (medicinalUses || []).length > 0
                ? `Medicinal uses: ${(medicinalUses || []).slice(0, 5).join(", ")}`
                : "";

            userMessage = `Health profile:\n${profileLines}\n\nPlant scanned: ${plantName}\nSafety rating: ${safetyRating || "UNKNOWN"}\n${warningText}\n${usesText}\n\nWrite a concise, friendly 2-3 paragraph health summary for ${familyMember.name} about using ${plantName}. Cover: (1) key considerations given their health profile, (2) whether this plant suits them and why, (3) one practical tip. Be warm, plain-language, and avoid repeating raw warning strings verbatim.`;
        } else {
            userMessage = `Health profile:\n${profileLines}\n\nWrite a concise, friendly 2-3 paragraph wellness summary for ${familyMember.name}. Cover: (1) notable observations from their vitals and conditions, (2) general wellness considerations, (3) one practical tip for using medicinal plants safely given their profile. Be warm and plain-language.`;
        }

        const client = new Anthropic({ apiKey: ENV.ANTHROPIC_API_KEY });
        const stream = client.messages.stream({
            model: "claude-opus-4-6",
            max_tokens: 1024,
            thinking: { type: "adaptive" },
            system: "You are Rooted's health assistant. You help users understand how medicinal plants interact with their family's health profiles. Always remind users to consult a healthcare professional for medical decisions. Keep summaries concise, friendly, and actionable.",
            messages: [{ role: "user", content: userMessage }],
        });

        const response = await stream.finalMessage();
        const summary = response.content.find(b => b.type === "text")?.text ?? "";

        res.status(200).json({
            success: true,
            data: {
                familyMemberName: familyMember.name,
                plantName: plantName || null,
                summary,
            }
        });

    } catch (error) {
        console.error("LLM summary error:", error);
        res.status(500).json({ success: false, message: error.message || "Failed to generate summary" });
    }
};
