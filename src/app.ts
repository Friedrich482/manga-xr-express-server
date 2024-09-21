import express from "express";
import chapterPages from "./routes/chapterPages";
import unitMangaInfo from "./routes/unitMangaInfo";
import latestUpdates from "./routes/latestUpdates";
import popularManga from "./routes/popularManga";
import home from "./routes/home";
import list from "./routes/list";
const app = express();
const PORT = 5000;

app.use("/", chapterPages);
app.use("/", home);
app.use("/", unitMangaInfo);
app.use("/", latestUpdates);
app.use("/", popularManga);
app.use("/", list);

app
  .listen(PORT, () => {
    console.log(
      `Server is Successfully Running, and App is listening on port ${PORT}`
    );
  })
  .on("error", (error: Error) => {
    console.log("Error occurred, server can't start", error);
  });
