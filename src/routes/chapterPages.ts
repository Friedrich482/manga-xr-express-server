import getChapterPagesController from "@/controllers/getChapterPagesController";
import express from "express";

const router = express.Router();

router.get("/chapterPages", getChapterPagesController);

export default router;
