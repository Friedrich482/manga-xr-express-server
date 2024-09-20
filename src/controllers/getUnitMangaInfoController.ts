import { fetchUnitMangaInfo } from "@/services/fetchUnitMangaInfo";
import { Request, Response } from "express";

const getUnitMangaInfoController = async (req: Request, res: Response) => {
  const { mangaSlug } = req.query as { mangaSlug: string };
  if (!mangaSlug) {
    res.status(400);
    res.send({ error: "Invalid manga" });
  }
  const mangaData = await fetchUnitMangaInfo(mangaSlug);
  res.status(200);
  res.send({ mangaData });
};

export default getUnitMangaInfoController;
