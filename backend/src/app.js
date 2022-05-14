const express = require("express");
const path = require("path");
require("dotenv").config();
const scoresRoutes = require("./routes/scoresRoutes");
const actionsRoutes = require("./routes/actionsRoutes");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/scores", scoresRoutes);
app.use("/actions", actionsRoutes);
app.use(express.static(path.join(__dirname, "../build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

module.exports = app;
