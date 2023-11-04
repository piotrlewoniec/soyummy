const express = require("express");
const {
  getRecipe,
  getCategories,
  getOneRecipe,
} = require("./recipe.controler");
const router = express.Router();

router.get("/recipes/category-list", getCategories);
router.get("/recipes/", getRecipe);
router.get("/recipes/:category", getOneRecipe);

module.exports = router;
