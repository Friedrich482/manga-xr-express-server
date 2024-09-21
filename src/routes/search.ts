import getSearchMangaResultsController from "@/controllers/getSearchMangaResultsController";
import express from "express";

const router = express.Router();

router.get("/search", getSearchMangaResultsController);

export default router;
