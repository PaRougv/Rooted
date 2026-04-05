import Bookmark from "../models/bookmark.model.js";

export const getBookmarks = async (req, res) => {
  try {
    const userId = req.user?.id;
    const bookmarks = await Bookmark.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: bookmarks });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message || "Failed to fetch bookmarks" });
  }
};

export const addBookmark = async (req, res) => {
  try {
    const userId = req.user?.id;
    const { plantName, notes } = req.body;

    if (!plantName?.trim()) {
      return res.status(400).json({ success: false, message: "Plant name is required" });
    }

    const bookmark = await Bookmark.create({
      userId,
      plantName: plantName.trim(),
      notes: notes?.trim() || "",
    });

    res.status(201).json({ success: true, data: bookmark });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ success: false, message: "Plant already bookmarked" });
    }
    res.status(500).json({ success: false, message: error.message || "Failed to add bookmark" });
  }
};

export const removeBookmark = async (req, res) => {
  try {
    const userId = req.user?.id;
    const { id } = req.params;

    const result = await Bookmark.findOneAndDelete({ _id: id, userId });
    if (!result) {
      return res.status(404).json({ success: false, message: "Bookmark not found" });
    }

    res.status(200).json({ success: true, message: "Bookmark removed" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message || "Failed to remove bookmark" });
  }
};
