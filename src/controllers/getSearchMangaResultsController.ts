import { fetchSearchMangaResults } from "@/services/fetchSearchMangaResults";
import { Request, Response } from "express";

const getSearchMangaResultsController = async (req: Request, res: Response) => {
  const mangaName = req.query.mangaName as string;
  if (!mangaName) {
    res.status(400);
    res.send({ error: "Invalid manga name" });
  }

  const searchResults = await fetchSearchMangaResults(mangaName);
  res.status(200);
  res.send(searchResults);
};

export default getSearchMangaResultsController;
