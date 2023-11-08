const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const IngredientSchema = new Schema({
  _id: String,
  ttl: String,
  desc: String,
  thb: String,
});

const Ingredient = mongoose.model("ingredients", IngredientSchema);

module.exports = Ingredient;
