const express = require("express");
const { getRecipe } = require("./recipe.controler");
const router = express.Router();

router.get("/recipes/", getRecipe);
router.get("/recipes/:category", getRecipe);

module.exports = router;
