import mongoose from "mongoose";

const journalEntrySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    plantName: {
        type: String,
        required: true,
    },
    familyMemberId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "HealthData",
    },
    familyMemberName: {
        type: String,
    },
    usageType: {
        type: String,
        enum: ["tea", "topical", "tincture", "capsule", "raw", "cooked", "oil", "other"],
        default: "other",
    },
    dosage: {
        type: String,
    },
    notes: {
        type: String,
    },
    effectsObserved: {
        type: String,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
    },
    sideEffects: {
        type: String,
    },
    wouldUseAgain: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true
});

export const JournalEntry = mongoose.model("JournalEntry", journalEntrySchema);
