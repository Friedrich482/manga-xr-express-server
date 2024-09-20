import fetchChapterPages from "@/services/fetchChapterPages";
import isValidChapterFormat from "@/utils/isValidChapterSlug";
import { Request, Response } from "express";
const getChapterPagesController = async (req: Request, res: Response) => {
  const { chapterSlug, mangaSlug } = req.query as {
    chapterSlug: string;
    mangaSlug: string;
  };
  if (!mangaSlug) {
    res.status(400);
    res.send({ error: "Invalid manga" });
  }
  if (!isValidChapterFormat(chapterSlug)) {
    res.status(400);
    res.send({ error: "Invalid chapter" });
    return;
  }
  const images = await fetchChapterPages(chapterSlug, mangaSlug);
  res.status(200);
  res.send({
    images,
  });
};

export default getChapterPagesController;
