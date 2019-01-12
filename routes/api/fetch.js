// require router to pass to the server and controller to get the function required
var router = require("express").Router();
var fetchController = require("../../controllers/fetch");

router.get("/", fetchController.scrapeHeadlines);

module.exports = router;
