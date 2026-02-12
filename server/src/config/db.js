import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(ENV.MONGODB_URI)

        console.log(`connected to mongoDB !!!!! `)
    } catch (error) {
        console.log(error)
    }
}