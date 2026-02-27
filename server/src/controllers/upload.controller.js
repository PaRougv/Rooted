import axios from "axios";

export const uploadImage = async (req, res) => {
    try {
        const { image } = req.body;

        if (!image) {
            return res.status(400).json({
                success: false,
                message: "No image received"
            });
        }

        const base64Image = image.replace(/^data:image\/\w+;base64,/, "");

        const response = await axios.post(
            "https://plant.id/api/v3/identification",
            {
                images: [base64Image],
                similar_images: true
            },
            {
                headers: {
                    "Api-Key": process.env.PLANT_ID_API_KEY,
                    "Content-Type": "application/json"
                }
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

        console.log("🌿 Plant Identified:", plantName);
        console.log("📊 Confidence:", probability);

        return res.status(200).json({
            success: true,
            plant: {
                name: plantName,
                probability: probability
            }
        });

    } catch (error) {
        console.error(
            "Plant API Error:",
            error.response?.data || error.message
        );

        return res.status(500).json({
            success: false,
            message: "Plant identification failed",
            error: error.response?.data || error.message
        });
    }
};