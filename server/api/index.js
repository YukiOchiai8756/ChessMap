const express = require('express');
const router = express.Router();
const init = require("./init");
const retrieve = require("./retrieve");

router.use("/init", init);
router.use("/retrieve", retrieve);

module.exports = router;