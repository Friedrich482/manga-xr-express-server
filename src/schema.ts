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

type MainElementMangaType = {
  title: string;
  image: string;
  mangaSlug: string;
  lastChapter: string;
};

export type fetchMangaBasicType = MainElementMangaType;

export type LatestUpdateType = MainElementMangaType;

export type PartialPopularMangaType = MainElementMangaType;

export type PopularMangaType = PartialPopularMangaType & { genres: string };

export type PartialMangaListType = {
  title: string;
  mangaSlug: string;
};

export type MangaListType = fetchMangaBasicType;
