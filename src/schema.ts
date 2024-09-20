import { z } from "zod";

export const fetchChapterPagesSchema = z.object({
  chapter: z.string().min(1),
  mangaTitle: z.string().min(1),
});
