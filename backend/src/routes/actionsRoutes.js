const express = require("express");
const actionsController = require("../controllers/actionsController");
const router = express.Router();

router.get("/", actionsController.getAll);
router.get("/:id", actionsController.getOne);
router.post("/", actionsController.createOne);
router.put("/:id", actionsController.updateOne);
router.delete("/:id", actionsController.deleteOne);

module.exports = router;