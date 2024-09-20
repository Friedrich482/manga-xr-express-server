import getPopularMangaController from "@/controllers/getPopularMangaController";
import express from "express";
const router = express.Router();

router.get("/popularManga", getPopularMangaController);

export default router;
