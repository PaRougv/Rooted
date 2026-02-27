import express from "express";
import { uploadImage } from "../controllers/upload.controller.js";

const router = express.Router()

router.post('/uploadphoto' , uploadImage)

export default router