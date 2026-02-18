import { HealthData } from "../models/healthdata.model.js";

export const takeUser = async (req, res) => {
  try {
    const userId = req.user._id;

    const {
      weight,
      height,
      bloodpressure,
      heartrate,
      anyothercondition
    } = req.body;

    const health = await HealthData.findOneAndUpdate(
      { user: userId },
      {
        weight: weight ? Number(weight) : undefined,
        height: height ? Number(height) : undefined,
        bloodPressure: bloodpressure,
        heartRate: heartrate ? Number(heartrate) : undefined,
        anyOtherCondition: anyothercondition
      },
      {
        new: true,
        upsert: true   // 👈 creates if not exists
      }
    );

    return res.status(200).json({
      message: "Health data saved",
      data: health
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save health data" });
  }
};

export const llmOutput = async (req , res) => {

}