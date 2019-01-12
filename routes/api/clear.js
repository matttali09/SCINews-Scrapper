// require router to pass to the server and controller to get the function required
var router = require("express").Router();
var clearController = require("../../controllers/clear");

router.get("/", clearController.clearDB);

module.exports = router;