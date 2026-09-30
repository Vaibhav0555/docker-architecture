const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from notes-backend!" });
});

const port = process.env.PORT;

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to MongoDB! Starting server.");
    app.listen(port, () => {
      console.log(`notes server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Something went wrong");
    console.error(err);
  });
