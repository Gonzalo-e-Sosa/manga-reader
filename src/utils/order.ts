import type { ChapterFeedData } from "@/types/response";

export function orderMangaChapters(chapters: ChapterFeedData[], reversed = true): ChapterFeedData[] {
  if (reversed)
    return chapters.sort((a, b) => {
      const { chapter: chapterA } = a.attributes;
      const { chapter: chapterB } = b.attributes;
      return Number(chapterB) - Number(chapterA);
    })
  return chapters.sort((a, b) => {
    const { chapter: chapterA } = a.attributes;
    const { chapter: chapterB } = b.attributes;
    return Number(chapterA) - Number(chapterB);
  })
}