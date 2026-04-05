import axios from "axios";
import { ENV } from "../config/env.js";

export const uploadImage = async (req, res) => {
    try {
        const { image } = req.body;

        if (!image) {
            return res.status(400).json({
                success: false,
                message: "No image received"
            });
        }

        if (typeof image !== "string" || !image.startsWith("data:image/")) {
            return res.status(400).json({
                success: false,
                message: "Invalid image payload"
            });
        }

        const base64Image = image.replace(/^data:image\/\w+;base64,/, "");

        if (!ENV.PLANT_ID_API_KEY) {
            return res.status(503).json({
                success: false,
                message: "Plant identification service is not configured"
            });
        }

        const response = await axios.post(
            "https://plant.id/api/v3/identification?details=common_names",
            {
                images: [base64Image],
                similar_images: true
            },
            {
                headers: {
                    "Api-Key": ENV.PLANT_ID_API_KEY,
                    "Content-Type": "application/json"
                },
                timeout: 45000
            }
        );

        const suggestions =
            response.data?.result?.classification?.suggestions;

        if (!suggestions || suggestions.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No plant identified"
            });
        }

        const bestMatch = suggestions[0];

        const plantName = bestMatch.name;
        const probability = bestMatch.probability;
        const commonNames = bestMatch.details?.common_names || [];

        console.log("🌿 Plant Identified:", plantName);
        console.log("📊 Confidence:", probability);
        console.log("🏷️ Common names:", commonNames);

        return res.status(200).json({
            success: true,
            plant: {
                name: plantName,
                probability: probability,
                commonNames: Array.isArray(commonNames) ? commonNames : []
            },
            result: response.data?.result || null
        });

    } catch (error) {
        console.error(
            "Plant API Error:",
            error.response?.data || error.message
        );

        return res.status(500).json({
            success: false,
            message: error.response?.status === 401
                ? "Plant identification key is invalid"
                : error.response?.status === 429
                    ? "Plant identification service is rate limited right now"
                    : error.code === "ECONNABORTED"
                        ? "Plant identification timed out. Please try again."
                    : "Plant identification failed",
            error: error.response?.data || error.message
        });
    }
};
