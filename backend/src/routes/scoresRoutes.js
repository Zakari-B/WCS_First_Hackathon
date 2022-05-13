const express = require("express");
const scoresController = require("../controllers/scoresController");
const router = express.Router();

router.get("/", scoresController.getAll);
router.get("/:id", scoresController.getOne);
router.post("/", scoresController.createOne);
router.put("/:id", scoresController.updateOne);
router.delete("/:id", scoresController.deleteOne);

module.exports = router;