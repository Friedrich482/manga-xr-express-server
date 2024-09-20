import { fetchPopularManga } from "@/services/fetchPopularManga";
import { Request, Response } from "express";

const getPopularMangaController = async (req: Request, res: Response) => {
  const number = Number(req.query.number as string);
  const url = req.query.url as string;
  if (isNaN(number)) {
    res.status(400);
    res.send({ error: "Invalid number" });
  }
  const popularMangaS = await fetchPopularManga(number, url);
  res.status(200);
  res.send({ popularMangaS });
};

export default getPopularMangaController;
