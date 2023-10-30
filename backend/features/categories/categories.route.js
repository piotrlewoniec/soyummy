const express = require("express");
const { getCategories } = require("./categories.controler");
const router = express.Router();

router.get("/category-list", getCategories);

module.exports = router;
