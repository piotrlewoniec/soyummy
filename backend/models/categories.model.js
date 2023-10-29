const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");
const categorySchema = new Schema({
  title: {
    type: String,
  },
  thumb: {
    type: String,
  },
  description: {
    type: String,
  },
});
const Categories = mongoose.model("categorieslists", categorySchema);

module.exports = Categories;
