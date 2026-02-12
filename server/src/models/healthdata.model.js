import mongoose from "mongoose";

const healthDataSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    weight: {
        type: Number,
    },
    height: {
        type: Number
    },
    bloodPressure: {
        type: String,
    },
    heartRate: {
        type: Number,
    },
    anyOtherCondition: {
        type: String,
    }
},{
    timestamps:true
})

export const HealthData = mongoose.model("HealthData", healthDataSchema);