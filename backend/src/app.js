const express = require("express");
const path = require("path");
const cors = require("cors");

// let's create express app

const app = express();

// use some application-level middlewares

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../../frontend")));

// load router

const router = require("./router");

app.use("/api", router);

// require("./N2yoListener");

// Allow front rooter
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend", "index.html"));
});

// ready to export
module.exports = app;
