const Ingredient = require("./ingredients.model.js");
const { v4: uuidv4 } = require("uuid");

const addProductToList = async (req, res) => {
  try {
    const { userId, product } = req.body;

    const newIngredient = new Ingredient({
      _id: uuidv4(),
      ttl: product.title,
      desc: product.description,
      thb: product.thumbnail,
    });

    await newIngredient.save();

    res.status(200).json({
      message: "Product has been added to the user's shopping list.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error:
        "An error occurred while adding the product to the user's shopping list.",
    });
  }
};

const removeProductFromList = async (req, res) => {
  try {
    const userId = req.params.userId;
    const productId = req.params.productId;

    await Ingredient.findByIdAndRemove(productId);

    res.status(200).json({
      message: "Product has been removed from the user's shopping list.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error:
        "An error occurred while removing the product from the user's shopping list.",
    });
  }
};

const getUserShoppingList = async (req, res) => {
  try {
    const userId = req.params.userId;

    const shoppingList = await Ingredient.find({ _id: userId });
    res.status(200).json({ shoppingList });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "An error occurred while retrieving the user's shopping list.",
    });
  }
};

const searchRecipesByIngredient = async (req, res, next) => {
  try {
    const ingredient = req.query.ingredients;
    const recipes = await Ingredient.find({ ttl: ingredient });
    res.status(200).json({ recipes });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "An error occurred while searching for recipes by ingredient.",
    });
  }
};

module.exports = {
  addProductToList,
  removeProductFromList,
  getUserShoppingList,
  searchRecipesByIngredient,
};
