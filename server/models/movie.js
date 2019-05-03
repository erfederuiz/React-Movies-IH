const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
  title: {type: String, unique: true, required: true},
  year: {type: Number},
  director: {type: String},
  duration: {type: String},
  genre: [String],
  rate: {type: Number},
  image_url: {type: String}
},{timestamps:true});

const Movie = mongoose.model("Movies", movieSchema);

module.exports = Movie;