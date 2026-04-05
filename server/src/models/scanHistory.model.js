import mongoose from "mongoose";

const scanHistorySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    familyMemberId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "HealthData",
        required: true,
    },
    familyMemberName: {
        type: String,
        required: true
    },
    plantName: {
        type: String,
        required: true
    },
    scientificName: {
        type: String,
        default: null
    },
    commonNames: [{
        type: String
    }],
    probability: {
        type: Number,
        required: true
    },
    safetyRating: {
        type: String,
        enum: ["SAFE", "CAUTION", "AVOID"],
        required: true
    },
    warnings: [{
        type: String
    }],
    recommendations: [{
        type: String
    }],
    medicinalUses: [{
        type: String
    }],
    preparationMethods: [{
        type: String
    }],
    location: {
        lat: { type: Number, default: null },
        lng: { type: Number, default: null }
    }
},{
    timestamps: true
});

export const ScanHistory = mongoose.model("ScanHistory", scanHistorySchema);
