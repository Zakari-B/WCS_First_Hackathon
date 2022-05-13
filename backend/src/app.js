const express = require("express");
require("dotenv").config();
const scoresRoutes = require("./routes/scoresRoutes");
const actionsRoutes = require("./routes/actionsRoutes");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/scores", scoresRoutes);
app.use("/actions", actionsRoutes);

app.get("/*", (req, res) => {
    res.status(404).send({message: "Not found !"})
})

module.exports = app;