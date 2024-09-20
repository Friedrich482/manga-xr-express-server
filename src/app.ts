import express from "express";
import chapterPages from "./routes/chapterPages";
const app = express();
const PORT = 5000;

app.use("/", chapterPages);

app
  .listen(PORT, () => {
    console.log(
      `Server is Successfully Running, and App is listening on port ${PORT}`
    );
  })
  .on("error", (error: Error) => {
    console.log("Error occurred, server can't start", error);
  });
