var router = require("express").Router();
var headlineRoutes = require("./headlines.js");
var noteRoutes = require("./notes.js");

router.use("/saveHeadline", headlineRoutes);


module.exports = router;