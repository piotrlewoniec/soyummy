const express = require("express");
const { getCategories } = require("../controllers/categories.controler");
const router = express.Router();

router.get("/category-list", getCategories);

module.exports = router;
