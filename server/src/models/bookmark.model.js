import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  plantName: { type: String, required: true },
  notes: { type: String, default: "" },
}, { timestamps: true });

bookmarkSchema.index({ userId: 1, plantName: 1 }, { unique: true });

export default mongoose.model("Bookmark", bookmarkSchema);
