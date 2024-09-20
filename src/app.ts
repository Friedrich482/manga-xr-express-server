import express from "express";
import fetchChapterPages from "./utils/fetchChapterPages";
const app = express();
const PORT = 5000;

app.get("/", async (req, res) => {
  res.status(200);
  const images = await fetchChapterPages("chapter-1", "Mato-Seihei-No-Slave");
  res.send({ puppet: "Puppeteer god, you suck", images });
});

app
  .listen(PORT, () => {
    console.log(
      `Server is Successfully Running, and App is listening on port ${PORT}`
    );
  })
  .on("error", (error: Error) => {
    console.log("Error occurred, server can't start", error);
  });
