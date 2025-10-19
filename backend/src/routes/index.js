import { Router } from "express";
import projectsRouter from "./projectsRouter.js";
import statesRouter from "./statesRouter.js";
import analysisRouter from "./analysisRouter.js";
import graphicsRouter from "./graphicsRouter.js";

const routerIndex = Router();

routerIndex.use("/proyectos", projectsRouter);
routerIndex.use("/estados", statesRouter);
routerIndex.use("/analisis", analysisRouter);
routerIndex.use("/graficos", graphicsRouter);

/**
 * @swagger
 * components:
 *   schemas:
 *     Estado:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         nombreEstado:
 *           type: string
 *           example: Iniciado
 *         proyectos:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 3
 *               nombre:
 *                 type: string
 *                 example: Proyecto 1
 *               descripcion:
 *                 type: string
 *                 example: Prueba 1
 *               estadoID:
 *                 type: integer
 *                 example: 1
 *               fechaInicio:
 *                 type: string
 *                 format: date-time
 *                 example: 2025-10-18T00:00:00.000Z
 *               fechaFin:
 *                 type: string
 *                 format: date-time
 *                 example: 2025-10-20T00:00:00.000Z
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *                 example: 2025-10-19T03:12:11.469Z
 *
 *     Proyecto:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 2
 *         nombre:
 *           type: string
 *           example: Proyecto Actualizado
 *         descripcion:
 *           type: string
 *           example: Descripción actualizada
 *         estadoID:
 *           type: integer
 *           example: 1
 *         fechaInicio:
 *           type: string
 *           format: date-time
 *           example: 2025-10-19T00:00:00.000Z
 *         fechaFin:
 *           type: string
 *           format: date-time
 *           example: 2025-10-25T00:00:00.000Z
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: 2025-10-19T03:08:08.764Z
 *         estado:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *               example: 1
 *             nombreEstado:
 *               type: string
 *               example: Iniciado
 *
 *     Analisis:
 *       type: object
 *       properties:
 *         resumen:
 *           type: string
 *           example: "**Resumen Estadístico Breve:**\n\nLa lista consta de **2** elementos en total:\n\n* **1** elemento de tipo identificador/etiqueta ('Prueba 1').\n* **1** elemento de tipo estado/actualización ('Descripción actualizada')."
 *
 *     Grafico:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *           example: Iniciado
 *         cantidad:
 *           type: integer
 *           example: 2
 */



export default routerIndex;
