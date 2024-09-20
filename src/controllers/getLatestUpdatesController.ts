import { fetchLatestUpdates } from "@/services/fetchLatestUpdates";
import { Request, Response } from "express";

const getLatestUpdatesController = async (req: Request, res: Response) => {
  const latestUpdates = await fetchLatestUpdates();
  res.status(200);
  res.send({ latestUpdates });
};

export default getLatestUpdatesController;
