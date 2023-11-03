const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const path = require("path");

const { swaggerRouter } = require("../services/swagger");
const { usersRouter } = require("../features/users");

const recipeRouter = require("../features/recipe/recipe.route");
const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/v1/users", usersRouter);

app.use("/soyummy", recipeRouter);

app.use("/info", swaggerRouter);

app.use("/avatars", express.static(path.join(__dirname, "../public/avatars")));

app.use("/css", express.static(path.join(__dirname, "../services/ejs/css")));
app.use("/js", express.static(path.join(__dirname, "../services/ejs/js")));
app.use(
  "/images",
  express.static(path.join(__dirname, "../services/ejs/images"))
);
app.set("views", path.join(__dirname, "../services/ejs/"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  const hostAddress = req.protocol + "://" + req.get("host");
  const swaggerRoute = "/info/api-docs";
  res.render("index", {
    hostAddress: hostAddress,
    swaggerRoute: swaggerRoute,
  });
});

app.use((req, res) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "Not found",
    data: "Not found",
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    status: "fail",
    code: 500,
    message: err.message,
    data: "Internal Server Error",
  });
});

module.exports = { app };
