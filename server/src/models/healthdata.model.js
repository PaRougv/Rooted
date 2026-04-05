import mongoose from "mongoose";

const healthDataSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    name: {
        type: String,
        trim: true
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
    },
    medications: [{
        name: { type: String, required: true },
        dosage: { type: String },
        frequency: { type: String }
    }]
},{
    timestamps:true
})

export const HealthData = mongoose.model("HealthData", healthDataSchema);