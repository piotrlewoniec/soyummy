const router = require("express").Router();
const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.json"); //uncomment for json standard

// const options = { //uncomment for json standard
//   explorer: true,
// };

// router.use("/api-docs", swaggerUi.serve); //uncomment for json standard
// router.get("/api-docs", swaggerUi.setup(swaggerDocument, options)); //uncomment for json standard

const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "SoYoummy Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "CodeLords",
        url: "https://codelords.com",
        email: "codelords@email.com",
      },
    },
    servers: [
      {
        // url: "http://localhost:3000",
        url: "https://soyummy-gilt.vercel.app/",
      },
    ],
  },
  apis: ["./services/swagger/routes/*.js"],
};

const specs = swaggerJsdoc(options);

const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.3.0/swagger-ui.min.css";

router.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true, customCssUrl: CSS_URL })
);

// router.use(
//   "/api-docs",
//   swaggerUi.serve,
//   swaggerUi.setup(specs, { explorer: true })
// );

module.exports = { router };
