import { ENV } from "./src/config/env.js";
// Load DB config before app so Mongoose options apply before models register
import { connectDB } from "./src/config/db.js";
import app from "./src/app.js";

const startServer = async () => {
    try {
        // Connect to database first
        await connectDB();
        
        // Then start the server
        app.listen(ENV.PORT, () => {
            console.log(`Server running on PORT: ${ENV.PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();