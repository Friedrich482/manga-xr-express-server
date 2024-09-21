import getListFromLetterController from "@/controllers/getListFromLetterController";
import express from "express";

const router = express.Router();

router.get("/list", getListFromLetterController);

export default router;
