import express from "express";
import chapterPages from "./routes/chapterPages";
import home from "./routes/home";
const app = express();
const PORT = 5000;

app.use("/", chapterPages);
app.use("/", home);

app
  .listen(PORT, () => {
    console.log(
      `Server is Successfully Running, and App is listening on port ${PORT}`
    );
  })
  .on("error", (error: Error) => {
    console.log("Error occurred, server can't start", error);
  });
