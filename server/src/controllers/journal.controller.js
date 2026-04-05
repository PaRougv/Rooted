import { JournalEntry } from "../models/journal.model.js";

export const createEntry = async (req, res) => {
    try {
        const userId = req.user?.id;
        const { plantName, familyMemberId, familyMemberName, usageType, dosage, notes, effectsObserved, rating, sideEffects, wouldUseAgain } = req.body;

        if (!plantName?.trim()) {
            return res.status(400).json({ success: false, message: "Plant name is required" });
        }

        const entry = await JournalEntry.create({
            user: userId,
            plantName: plantName.trim(),
            familyMemberId: familyMemberId || undefined,
            familyMemberName: familyMemberName || undefined,
            usageType: usageType || "other",
            dosage,
            notes,
            effectsObserved,
            rating: rating ? Number(rating) : undefined,
            sideEffects,
            wouldUseAgain: wouldUseAgain !== false,
        });

        res.status(201).json({ success: true, data: entry });
    } catch (error) {
        console.error("Create journal entry error:", error);
        res.status(500).json({ success: false, message: error.message || "Failed to create journal entry" });
    }
};

export const getEntries = async (req, res) => {
    try {
        const userId = req.user?.id;
        const { plantName, familyMemberId } = req.query;

        const query = { user: userId };
        if (plantName) query.plantName = { $regex: plantName, $options: "i" };
        if (familyMemberId) query.familyMemberId = familyMemberId;

        const entries = await JournalEntry.find(query).sort({ createdAt: -1 }).limit(100);
        res.status(200).json({ success: true, data: entries });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message || "Failed to get journal entries" });
    }
};

export const updateEntry = async (req, res) => {
    try {
        const userId = req.user?.id;
        const { id } = req.params;

        const entry = await JournalEntry.findOneAndUpdate(
            { _id: id, user: userId },
            req.body,
            { returnDocument: "after" }
        );

        if (!entry) return res.status(404).json({ success: false, message: "Entry not found" });
        res.status(200).json({ success: true, data: entry });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message || "Failed to update entry" });
    }
};

export const deleteEntry = async (req, res) => {
    try {
        const userId = req.user?.id;
        const { id } = req.params;

        const result = await JournalEntry.findOneAndDelete({ _id: id, user: userId });
        if (!result) return res.status(404).json({ success: false, message: "Entry not found" });

        res.status(200).json({ success: true, message: "Entry deleted" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message || "Failed to delete entry" });
    }
};
