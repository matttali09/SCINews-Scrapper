var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ArticleSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    required: true
  },
  // 'subTitle' is required and type of String
  subTitle: {
    type: String,
    required: true
  },
  // 'date and author' is a single line pulled from the site required and type of String
  dateAndAuthor: {
    type: String,
    required: true
  },
  // 'imgUrl' is the http address for the image from the site required and type of String
  imgUrl: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  link: {
    type: String,
    required: true
  },
  // date string
  date: {
    type: Date,
    default: Date.now
  },
  // saved boolean to add it to saved section if switched to true
  saved: {
    type: Boolean,
    default: false
  },
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;