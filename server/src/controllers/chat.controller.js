import Anthropic from "@anthropic-ai/sdk";
import { HealthData } from "../models/healthdata.model.js";
import { ScanHistory } from "../models/scanHistory.model.js";
import { ENV } from "../config/env.js";
import { herbDrugInteractions, plantMedicinalInfo, plantNamesMap } from "../data/herbDrugInteractions.js";

export const chatWithAI = async (req, res) => {
    try {
        const { message, conversationHistory } = req.body;
        const userId = req.user?.id;

        if (!message?.trim()) {
            return res.status(400).json({ success: false, message: "Message is required" });
        }

        if (!ENV.ANTHROPIC_API_KEY) {
            return res.status(503).json({ success: false, message: "AI chat is not configured. Add ANTHROPIC_API_KEY to server/.env" });
        }

        // Gather user context
        const familyMembers = await HealthData.find({ user: userId }).lean();
        const recentScans = await ScanHistory.find({ user: userId })
            .sort({ createdAt: -1 })
            .limit(10)
            .lean();

        // Build context about the user's data
        const familyContext = familyMembers.length > 0
            ? familyMembers.map(m => {
                const meds = (m.medications || []).map(med => med.name).join(", ");
                return `- ${m.name}: ${m.weight ? m.weight + "kg" : ""} ${m.height ? m.height + "cm" : ""} ${m.bloodPressure ? "BP:" + m.bloodPressure : ""} ${m.heartRate ? "HR:" + m.heartRate + "bpm" : ""} ${m.anyOtherCondition ? "Conditions:" + m.anyOtherCondition : ""} ${meds ? "Medications:" + meds : ""}`.trim();
            }).join("\n")
            : "No family members added yet.";

        const scanContext = recentScans.length > 0
            ? recentScans.slice(0, 5).map(s =>
                `- ${s.plantName} for ${s.familyMemberName}: ${s.safetyRating} (${new Date(s.createdAt).toLocaleDateString()})`
            ).join("\n")
            : "No recent scans.";

        // Build list of known plants
        const knownPlants = Object.keys(herbDrugInteractions).join(", ");

        const systemPrompt = `You are Rooted's AI assistant — a friendly, knowledgeable guide about medicinal plants and herbal safety. You help users understand plant-drug interactions, medicinal uses, and safety for their family.

CONTEXT — User's family profiles:
${familyContext}

Recent plant scans:
${scanContext}

You have knowledge about these medicinal plants: ${knownPlants}

GUIDELINES:
- Be warm, concise, and practical
- Always mention consulting a healthcare professional for medical decisions
- If asked about a specific plant, provide safety info, common uses, and preparation tips
- If asked about a family member, reference their health profile
- If you don't know something, say so honestly
- Keep responses 2-4 paragraphs unless the user asks for more detail
- Use simple language accessible to rural users
- Never diagnose or prescribe — only inform and suggest consulting professionals`;

        // Build messages array from conversation history
        const messages = [];
        if (Array.isArray(conversationHistory)) {
            for (const msg of conversationHistory.slice(-20)) {
                if (msg.role === "user" || msg.role === "assistant") {
                    messages.push({ role: msg.role, content: msg.content });
                }
            }
        }
        messages.push({ role: "user", content: message });

        const client = new Anthropic({ apiKey: ENV.ANTHROPIC_API_KEY });
        const response = await client.messages.create({
            model: "claude-sonnet-4-20250514",
            max_tokens: 1024,
            system: systemPrompt,
            messages,
        });

        const reply = response.content.find(b => b.type === "text")?.text ?? "";

        res.status(200).json({
            success: true,
            data: { reply }
        });

    } catch (error) {
        console.error("Chat error:", error);
        res.status(500).json({ success: false, message: error.message || "Chat failed" });
    }
};
