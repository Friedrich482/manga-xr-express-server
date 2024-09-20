import puppeteer from "puppeteer";
import getSeasonFromTitle from "../utils/getSeasonFromTitle";
import { MAIN_URL } from "@/lib/constants";
let id = "";
export const fetchChapterPages = async (
  chapter: string,
  mangaTitle: string
) => {
  id = `${mangaTitle}-${chapter}`;
  let browser;
  const { title, season } = getSeasonFromTitle(mangaTitle);
  try {
    browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--no-zygote"],
      executablePath:
        process.env.NODE_ENV === "production"
          ? process.env.PUPPETEER_EXECUTABLE_PATH
          : puppeteer.executablePath(),
    });
    const page = await browser.newPage();

    await page.setViewport({
      width: 1080,
      height: 768,
    });

    page.setDefaultNavigationTimeout(2 * 60 * 1000);
    if (season && Number(season) > 1) {
      await page.goto(
        `${MAIN_URL}/read-online/${title}-${chapter}-index-${season}.html`
      );
    } else {
      await page.goto(`${MAIN_URL}/read-online/${title}-${chapter}.html`);
    }
    const dataElements = await page.$$(
      "div.MainContainer > div.ImageGallery > div.ng-scope > div.ng-scope"
    );

    const data: string[] = [];
    for (const element of dataElements) {
      const image = await element.$eval("img", (el) => el.src);
      data.push(image);
    }
    await browser.close();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchChapterPages;
