import express from "express";
import { createEntry, getEntries, updateEntry, deleteEntry } from "../controllers/journal.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", authMiddleware, getEntries);
router.post("/", authMiddleware, createEntry);
router.put("/:id", authMiddleware, updateEntry);
router.delete("/:id", authMiddleware, deleteEntry);

export default router;
