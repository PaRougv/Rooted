import express from "express";
import { getBookmarks, addBookmark, removeBookmark } from "../controllers/bookmark.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", authMiddleware, getBookmarks);
router.post("/", authMiddleware, addBookmark);
router.delete("/:id", authMiddleware, removeBookmark);

export default router;
