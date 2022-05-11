const express = require("express");

const { Controller } = require("./controllers");
// const auth = require("./middlewares/auth");

const router = express.Router();

router.get("/path/toGet", (auth), Controller.method);
router.post("/path/toPost", (auth), Controller.method);
router.put("/path/toPut", (auth), Controller.method);
router.delete("/path/toDelete", (auth), Controller.method);


module.exports = router;