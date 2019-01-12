// Controller for our scraper
// ============================
var db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {
  scrapeHeadlines: function (req, res) {
    // scrape the SCINews website
    return scrape()
      .then(function (articles) {
        // create a headlines db and store it in the collection of articles
        return db.Headline.create(articles);
      })
      .then(function (dbHeadline) {
        if (dbHeadline.length === 0) {
          res.json({
            message: "No new articles today. Check back tomorrow!"
          });
        }
        else {
          // Otherwise send back a count of how many new articles we got
          res.json({
            message: "Added " + dbHeadline.length + " new articles!"
          });
        }
      })
      .catch(function (err) {
        // This will occur after inserting the others or if there is an error
        res.json({
          message: "Scrape complete!!"
        });
      });
  }
};