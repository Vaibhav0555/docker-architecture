const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send(`Welcome to ${process.env.APP_NAME}`);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
