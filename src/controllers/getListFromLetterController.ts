import { fetchListFromLetter } from "@/services/fetchListFromLetter";
import { Request, Response } from "express";

const getListFromLetterController = async (req: Request, res: Response) => {
  const index = req.query.index as string;
  if (!index) {
    res.status(400);
    res.send({ error: "Invalid index" });
  }
  const list = await fetchListFromLetter(index);
  res.status(200);
  res.send(list);
};

export default getListFromLetterController;
