var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import getSeasonFromTitle from "@/utils/getSeasonFromTitle";
import puppeteer from "node_modules/puppeteer/lib/types";
let id = "";
export const fetchChapterPages = (chapter, mangaTitle) => __awaiter(void 0, void 0, void 0, function* () {
    id = `${mangaTitle}-${chapter}`;
    let browser;
    const { title, season } = getSeasonFromTitle(mangaTitle);
    try {
        browser = yield puppeteer.launch();
        const page = yield browser.newPage();
        yield page.setViewport({
            width: 1080,
            height: 768,
        });
        page.setDefaultNavigationTimeout(2 * 60 * 1000);
        if (season && Number(season) > 1) {
            yield page.goto(`${"https://mangasee123.com"}/read-online/${title}-${chapter}-index-${season}.html`);
        }
        else {
            yield page.goto(`${"https://mangasee123.com"}/read-online/${title}-${chapter}.html`);
        }
        const dataElements = yield page.$$("div.MainContainer > div.ImageGallery > div.ng-scope > div.ng-scope");
        const data = [];
        for (const element of dataElements) {
            const image = yield element.$eval("img", (el) => el.src);
            data.push(image);
        }
        yield browser.close();
        return data;
    }
    catch (error) {
        console.error(error);
    }
});
