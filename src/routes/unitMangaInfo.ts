import getUnitMangaInfoController from "@/controllers/getUnitMangaInfoController";
import express from "express";
const router = express.Router();

router.get("/unitMangaInfo", getUnitMangaInfoController);

export default router;
