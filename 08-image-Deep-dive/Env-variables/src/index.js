const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to ${process.env.APP_NAME}</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
