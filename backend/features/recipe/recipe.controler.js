const { Recipe, Categories } = require("./recipe.model");

const getRecipe = async (req, res, next) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json({ recipes });
  } catch (error) {
    next(error);
  }
};

const getOneRecipe = async (req, res, next) => {
  try {
    const category = req.params.category;
    const recipe = await Recipe.findOne({ category });

    if (!recipe) {
      return res.status(404).json({ message: "error" });
    }

    res.status(200).json({ recipe });
  } catch (error) {
    next(error);
  }
};
const getCategories = async (req, res, next) => {
  try {
    const categories = await Categories.find();
    res.status(200).json({ categories });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCategories,
  getRecipe,
  getOneRecipe,
};
