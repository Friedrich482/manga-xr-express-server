import getLatestUpdatesController from "@/controllers/getLatestUpdatesController";
import express from "express";
const router = express.Router();

router.get("/latestUpdates", getLatestUpdatesController);

export default router;
