const express = require("express");
const {
  addProductToList,
  removeProductFromList,
  getUserShoppingList,
  searchRecipesByIngredient,
} = require("./ingredients.controler");
const router = express.Router();

router.post("/shopping-list/add", addProductToList);
router.delete("/shopping-list/remove/:productId", removeProductFromList);
router.get("/shopping-list", getUserShoppingList);
router.get("/ingredients/search", searchRecipesByIngredient);

module.exports = router;
