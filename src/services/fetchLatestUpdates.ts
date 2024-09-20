import { MAIN_URL } from "@/lib/constants";
import { LatestUpdateType } from "@/schema";
import cleanUpMangaArray from "@/utils/cleanUpMangaArray";
import puppeteer from "puppeteer";

export const fetchLatestUpdates = async () => {
  let browser;
  try {
    browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport({
      width: 1080,
      height: 768,
    });

    page.setDefaultNavigationTimeout(2 * 60 * 1000);
    await page.goto(MAIN_URL);

    const dataElements = await page.$$(
      "div.MainContainer > div.row > div.col-lg-8 > div.Box > div.BoxBody > div.row > div.col-md-6"
    );

    const data: LatestUpdateType[] = [];
    for (const element of dataElements) {
      if (data.length > 20) {
        break;
      }
      const title = (await element.$eval(
        "span > div > div.Label > a > div.SeriesName > span",
        (el) => el.textContent
      )) as string;
      // alt Title
      const link = (await element.$eval("span > div > div.Image > a", (el) =>
        el.getAttribute("href")
      )) as string;
      const firstSlashIndex: number = link.indexOf("/");
      const secondSlashIndex: number = link.indexOf("/", firstSlashIndex + 1);
      const mangaSlug = link.substring(secondSlashIndex + 1, link.length);
      const image = await element.$eval(
        "span > div > div.Image > a > img",
        (el) => el.src
      );
      const lastChapter = (await element.$eval(
        "span > div > div.Label > a > div.ChapterLabel",
        (el) => el.textContent
      )) as string;
      const parsedObject = {
        title,
        mangaSlug,
        lastChapter,
        image,
      };
      data.push(parsedObject);
    }
    await browser.close();
    return cleanUpMangaArray(data);
  } catch (error) {
    console.error(error);
  }
};
