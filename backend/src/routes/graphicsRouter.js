import { Router } from "express";
import readGraphics from "../controllers/graphics/readGraphics.js";

const graphicsRouter = Router();

/**
 * @swagger
 *    tags:
 *     name: Gráficos
 *     description: Obtiene la cantidad de proyectos agrupados por estado para visualización estadística.
 */

/**
 *@swagger
 * /api/graficos:
 *   get:
 *     summary: Obtiene los estados de los proyectos y la cantidad de proyectos asociados
 *     tags: [Gráficos]
 *     description: Devuelve un arreglo con los nombres de los estados y la cantidad de proyectos en cada uno.
 *     responses:
 *       200:
 *         description: Lista de estados y cantidades de proyectos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Grafico'
 *       500:
 *         description: Error interno del servidor.
 */
graphicsRouter.get("/", readGraphics);

export default graphicsRouter;
