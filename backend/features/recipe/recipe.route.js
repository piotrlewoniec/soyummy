const express = require("express");
const { getRecipe } = require("./recipe.controler");
const router = express.Router();

router.get("/recipes/:recipeId", getRecipe);

module.exports = router;
