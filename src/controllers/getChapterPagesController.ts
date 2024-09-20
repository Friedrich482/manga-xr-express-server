import fetchChapterPages from "@/services/fetchChapterPages";
import isValidChapterFormat from "@/utils/isValidChapterSlug";
import { Request, Response } from "express";
const getChapterPagesController = async (req: Request, res: Response) => {
  const { chapterSlug, mangaSlug } = req.query as {
    chapterSlug: string;
    mangaSlug: string;
  };

  if (!isValidChapterFormat(chapterSlug)) {
    res.status(400);
    res.send({ error: "Invalid chapter" });
    return;
  }
  res.status(200);
  const images = await fetchChapterPages(chapterSlug, mangaSlug);
  res.send({
    images,
  });
};

export default getChapterPagesController;
