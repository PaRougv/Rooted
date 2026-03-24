import "dotenv/config"

export const ENV = {
    PORT: process.env.PORT,
    MONGODB_URI : process.env.MONGODB_URI,
    JWT_SECRET : process.env.JWT_SECRET,
    PLANT_ID_API_KEY: process.env.PLANT_ID_API_KEY
}