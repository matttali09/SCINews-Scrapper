// Requiring our models
var db = require("../../models");
var router = require("express").Router();

// Headline Routes
// =============================================================

// Handle form submission, save submission to mongo
router.get('/saveHeadline', function (req, res) {
    console.log(req.body);
    // Insert the note into the notes collection
    db.Headlines.insert(req.body, function (error, saved) {
        // Log any errors
        if (error) {
            console.log(error);
        }
        else {
            // Otherwise, send the note back to the browser
            // This will fire off the success function of the ajax request
            res.send(saved);
        }
    });
});

// export router
module.exports = router