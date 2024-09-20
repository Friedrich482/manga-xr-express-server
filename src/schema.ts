import { z } from "zod";

export type ChapterType = {
  chapterTitle: string;
  chapterReleaseDate: string;
};

export type PartialMangaUnitDataType = {
  title: string;
  image: string;
  genres: string;
  releaseDate: string;
  author: string;
  latestUpdateDate: string;
  synopsis: string;
};
