import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Gestor de proyectos IA",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.js"],
};

const swagger = swaggerJsdoc(options)
export default swagger
