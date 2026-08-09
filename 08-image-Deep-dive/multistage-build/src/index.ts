import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from the multistage build image!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
