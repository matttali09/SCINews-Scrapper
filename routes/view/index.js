var router = require("express").Router();
var htmlRoutes = require("./html-routes.js");

router.use("/", htmlRoutes);
router.use("/saved", htmlRoutes);

module.exports = router;