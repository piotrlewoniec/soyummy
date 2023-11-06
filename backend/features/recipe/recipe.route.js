const express = require("express");
const {
  getRecipe,
  getCategories,
  getOneRecipe,
  searchRecipesByName,
  getFavRecipes,
  getOneFavRecipe,
  getOneRecipeById,
} = require("./recipe.controler");
const router = express.Router();

router.get("/recipes/category-list", getCategories);
router.get("/recipes/", getRecipe);
router.get("/recipes/:category", getOneRecipe);
router.get("/search", searchRecipesByName);
router.get("/favorites/:userid", getFavRecipes);
router.get("/favorites/recipes/:recipeid", getOneFavRecipe);
router.get("/recipe/:id", getOneRecipeById);

module.exports = router;
