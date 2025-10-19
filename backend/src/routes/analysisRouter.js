import { Router } from "express";
import summary from "../controllers/analysis/summary.js"

const analysisRouter = Router()

/**
 * @swagger
 *    tags:
 *     name: Análisis
 *     description: Generación automática de resúmenes estadísticos con IA a partir de la descripción de los proyectos.
 */

/**
 * @swagger
 * /api/analisis:
 *   post:
 *     summary: Genera un resumen administrativo y estadístico de los proyectos
 *     tags: [Análisis]
 *     description: Usa inteligencia artificial para analizar las descripciones de los proyectos y devolver un resumen estadístico. No requiere body.
 *     responses:
 *       200:
 *         description: Resumen generado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Analisis'
 *       500:
 *         description: Error interno del servidor.
 */
analysisRouter.post("/", summary)

export default analysisRouter