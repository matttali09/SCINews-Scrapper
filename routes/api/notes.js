// Requiring our models
var db = require("../../models");
var router = require("express").Router();

// Notes Routes
// =============================================================

// Handle form submission, save submission to mongo
router.get('/submit', function (req, res) {
    console.log(req.body);
    // Insert the note into the notes collection
    db.notes.insert(req.body, function (error, saved) {
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

// Update just one note by an id
router.post("/update/:id", function (req, res) {
    // When searching by an id, the id needs to be passed in
    // as (mongojs.ObjectId(IdYouWantToFind))

    // Update the note that matches the object id
    db.notes.update(
        {
            _id: mongojs.ObjectId(req.params.id)
        },
        {
            // Set the title, note and modified parameters
            // sent in the req body.
            $set: {
                title: req.body.title,
                note: req.body.note,
                modified: Date.now()
            }
        },
        function (error, edited) {
            // Log any errors from mongojs
            if (error) {
                console.log(error);
                res.send(error);
            }
            else {
                // Otherwise, send the mongojs response to the browser
                // This will fire off the success function of the ajax request
                console.log(edited);
                res.send(edited);
            }
        }
    );
});


// Delete One from the DB
router.get("/delete/:id", function (req, res) {
    // Remove a note using the objectID
    db.notes.remove(
        {
            _id: mongojs.ObjectID(req.params.id)
        },
        function (error, removed) {
            // Log any errors from mongojs
            if (error) {
                console.log(error);
                res.send(error);
            }
            else {
                // Otherwise, send the mongojs response to the browser
                // This will fire off the success function of the ajax request
                console.log(removed);
                res.send(removed);
            }
        }
    );
});

// export the router to the index api
module.exports = router