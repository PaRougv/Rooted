import mongoose from "mongoose";
import { ENV } from "./env.js";

// Fail fast instead of buffering queries for 10s while disconnected
mongoose.set("bufferCommands", false);

// Suppress Mongoose 'new' option deprecation (we use returnDocument: 'after')
const originalEmit = process.emit;
process.emit = function (name, data, ...args) {
  if (
    name === "warning" &&
    typeof data?.message === "string" &&
    data.message.includes("findOneAndUpdate") &&
    data.message.includes("`new` option")
  ) {
    return false;
  }
  return originalEmit.apply(process, [name, data, ...args]);
};

export const connectDB = async () => {
    if (!ENV.MONGODB_URI) {
        throw new Error("MONGODB_URI is missing. Set it in server/.env");
    }
    try {
        await mongoose.connect(ENV.MONGODB_URI, {
            serverSelectionTimeoutMS: 10_000,
            // Helps on some networks where IPv6 to Atlas is broken
            family: 4,
        });
        console.log(
            "connected to mongoDB !!!!! readyState=",
            mongoose.connection.readyState,
            "(1=connected)"
        );
        mongoose.connection.on("error", (err) =>
            console.error("MongoDB runtime error:", err.message)
        );
        mongoose.connection.on("disconnected", () =>
            console.warn("MongoDB disconnected")
        );
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        throw error;
    }
};