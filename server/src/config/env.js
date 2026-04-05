import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Try to load .env from server root (works locally). On Render, env vars are in process.env already.
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, "../../.env") });

const trim = (v) => (typeof v === "string" ? v.trim() : v);

export const ENV = {
    PORT: trim(process.env.PORT),
    MONGODB_URI: trim(process.env.MONGODB_URI),
    JWT_SECRET: trim(process.env.JWT_SECRET),
    PLANT_ID_API_KEY: trim(process.env.PLANT_ID_API_KEY),
    OLA_MAPS_KEY: trim(process.env.OLA_MAPS_KEY),
    NODE_ENV: trim(process.env.NODE_ENV) || "development",
    APP_BASE_URL: trim(process.env.APP_BASE_URL) || "http://localhost:5173",
    RESEND_API_KEY: trim(process.env.RESEND_API_KEY),
    EMAIL_FROM: trim(process.env.EMAIL_FROM),
    ALLOW_INSECURE_RESET_TOKEN_RESPONSE:
        trim(process.env.ALLOW_INSECURE_RESET_TOKEN_RESPONSE) === "true",
    ANTHROPIC_API_KEY: trim(process.env.ANTHROPIC_API_KEY),
};
