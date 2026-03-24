import mongoose from "mongoose";
import { ENV } from "./env.js";

// Suppress Mongoose 'new' option deprecation (we use returnDocument: 'after')
const originalEmit = process.emit;
process.emit = function (name, data, ...args) {
  if (
    name === "warning" &&
    typeof data?.message === "string" &&
    data.message.includes("findOneAndUpdate") &&
    data.message.includes("`new` option")
  ) {
    return false;
  }
  return originalEmit.apply(process, [name, data, ...args]);
};

export const connectDB = async () => {
    try {
        await mongoose.connect(ENV.MONGODB_URI)

        console.log(`connected to mongoDB !!!!! `)
    } catch (error) {
        console.log(error)
    }
}