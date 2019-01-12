// require router to pass to the server and controller to get the functions required
var router = require("express").Router();
var headlineController = require("../../controllers/headline");

router.get("/", headlineController.findAll);
router.delete("/:id", headlineController.delete);
router.put("/:id", headlineController.update);

module.exports = router;
