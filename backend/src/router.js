const express = require("express");

const { HvP } = require("./controllers");

const router = express.Router();

router.get("/scores", HvP.getScores);
router.get("/action", HvP.getAction);
router.post("/score", HvP.postScore);
router.post("/action", HvP.postAction);

module.exports = router;
