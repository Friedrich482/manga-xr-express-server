import express from "express";
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.status(200);
  res.send({ puppet: "Puppeteer my ass" });
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
