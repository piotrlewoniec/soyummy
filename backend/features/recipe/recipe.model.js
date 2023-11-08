const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: String,
  area: String,
  instructions: String,
  description: String,
  thumb: String,
  preview: String,
  time: String,
  favorites: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
  },
  youtube: String,
  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
  ingredients: [
    {
      name: String,
      measurement: String,
    },
  ],
});

const Recipe = mongoose.model("recipe", recipeSchema);

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

const ingredientSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  ttl: {
    type: String,
  },
  desc: {
    type: String,
  },
  t: {
    type: String,
  },
  thb: {
    type: String,
  },
});

const Ingredients = mongoose.model("ingredients", ingredientSchema);

module.exports = { Categories, Recipe, Ingredients };
