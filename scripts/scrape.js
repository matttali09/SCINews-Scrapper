// scrape script
// =============

// Require axios and cheerio, making our scrapes possible
var axios = require("axios");
var cheerio = require("cheerio");

// This function will scrape the sciworthy website
var scrape = function () {
    // First, we grab the body of the html with axios
    return axios.get("https://sciworthy.com/").then(function (response) {
        // Then, we load that into cheerio and save it to $ for a shorthand selector
        var $ = cheerio.load(response.data);

        // Now, we grab every h2 within an article tag, and do the following:
        $("article").each(function (i, element) {
            // Save an empty result object
            var result = {};

            // Add the text and href of every link, and save them as properties of the result object
            result.title = $(this)
                .children(".entry-title-primary")
                .text();
            result.subTitle = $(this)
                .children(".entry-subtitle")
                .text();
            result.dateAndAuthor = $(this)
                .children(".date")
                .text();
            result.imgUrl = $(this)
                .children("img")
                .attr("href");
            result.link = $(this)
                .children("a")
                .attr("href");

            // Create a new Headline using the `result` object built from scraping
            db.Headline.create(result)
                .then(function (dbHeadline) {
                    // View the added result in the console
                    console.log(dbHeadline);
                })
                .catch(function (err) {
                    // If an error occurred, log it
                    console.log(err);
                });
        });

        // Send a message to the client
        res.send("Scrape Complete");
    });
};

// Export the function to be used in fetch controller
module.exports = scrape;