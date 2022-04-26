/**
 * Configuration Project.
 */
const swaggerDefinition = {
  info: {
    title: "OneBlood Swagegr Node.js",
    description: "Swagger JSDoc.",
  },
  servers: ["http://localhost:5000"],
};

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition,
  apis: ["./routes/*.js"],
};

/**
 * Configuration Swagger UI  expressjs.
 * @param {express} app app express
 */
const setup = (app) =>
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerJsDoc(swaggerOptions))
  );

module.exports = setup;
