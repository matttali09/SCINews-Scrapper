// HTML Routes
router = require("express").Router();
// =============================================================

// Each of the below routes just handles the HTML page that the user gets sent to.

// main route loads home handlebars
router.get("/", function (req, res) {
  res.render("home");
});

// saved route loads saved handlebars
router.get("/saved", function (req, res) {
  res.render("saved");
});

module.exports = router
