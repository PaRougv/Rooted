export const uploadImage = async (req, res) => {
    try {
        const { image } = req.body;

        if (!image) {
            return res.status(400).json({
                success: false,
                message: "No image received"
            });
        }

        console.log("Image received");

        return res.status(200).json({
            success: true,
            message: "Image uploaded successfully"
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};