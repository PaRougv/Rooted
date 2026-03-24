import mongoose from "mongoose";
import { HealthData } from "../models/healthdata.model.js";

const serializeProfile = (doc) => ({
  id: doc._id.toString(),
  name: doc.name,
  weight: doc.weight,
  height: doc.height,
  bloodPressure: doc.bloodPressure,
  heartRate: doc.heartRate,
  anyOtherCondition: doc.anyOtherCondition
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
      anyothercondition
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
      anyOtherCondition: anyothercondition
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
      anyothercondition
    } = req.body;

    const health = await HealthData.findOneAndUpdate(
      { _id: id, user: userId },
      {
        ...(name !== undefined && { name: name?.trim() }),
        ...(weight !== undefined && { weight: weight ? Number(weight) : undefined }),
        ...(height !== undefined && { height: height ? Number(height) : undefined }),
        ...(bloodpressure !== undefined && { bloodPressure: bloodpressure }),
        ...(heartrate !== undefined && { heartRate: heartrate ? Number(heartrate) : undefined }),
        ...(anyothercondition !== undefined && { anyOtherCondition: anyothercondition })
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

};
