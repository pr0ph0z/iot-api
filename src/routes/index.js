const express = require("express");
const router = express.Router();

const test = require("../routes/test");

router.use("/test", test);

module.exports = router;
