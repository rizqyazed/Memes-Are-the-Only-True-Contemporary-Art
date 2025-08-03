const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
var bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "media")));
app.use(express.static(path.join(__dirname, "pd")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/pd/window.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./pd/window.html"));
});

app.get("/pd/window2.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./pd/window2.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
