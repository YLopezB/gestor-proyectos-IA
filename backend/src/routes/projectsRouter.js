import { Router } from "express"
import {readProject, readProjectId} from "../controllers/projects/readProject.js"
import createProject from "../controllers/projects/createProject.js"
import updateProject from "../controllers/projects/updateProject.js"
import deleteProject from "../controllers/projects/deleteProject.js"
import projectExist from "../middlewares/projectExist.js"

const projectsRouter = Router()

/**
 * @swagger
 * tags:
 *   name: Proyectos
 *   description: API para la gestión de proyectos
 */

/**
 * @swagger
 * /api/proyectos:
 *   get:
 *     summary: Obtiene todos los proyectos
 *     tags: [Proyectos]
 *     responses:
 *       200:
 *         description: Lista de proyectos obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Proyecto'
 */
projectsRouter.get("/", readProject)

/**
 * @swagger
 * /api/proyectos/{id}:
 *   get:
 *     summary: Obtiene un proyecto por ID
 *     tags: [Proyectos]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del proyecto
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Proyecto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Proyecto'
 *       404:
 *         description: Proyecto no encontrado
 */
projectsRouter.get("/:id", projectExist, readProjectId)

/**
 * @swagger
 * /api/proyectos/crear:
 *   post:
 *     summary: Crea un nuevo proyecto
 *     tags: [Proyectos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - descripcion
 *               - estadoID
 *               - fechaInicio
 *               - fechaFin
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Proyecto Nuevo
 *               descripcion:
 *                 type: string
 *                 example: Proyecto de prueba
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
 *                 example: 2025-10-25T00:00:00.000Z
 *     responses:
 *       201:
 *         description: Proyecto creado exitosamente
 *       400:
 *         description: Solicitud incorrecta
 */
projectsRouter.post("/crear", createProject)

/**
 * @swagger
 * /api/proyectos/actualizar/{id}:
 *   put:
 *     summary: Actualiza un proyecto existente
 *     tags: [Proyectos]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del proyecto a actualizar
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Proyecto Actualizado
 *               descripcion:
 *                 type: string
 *                 example: Descripción actualizada
 *               estadoID:
 *                 type: integer
 *                 example: 1
 *               fechaInicio:
 *                 type: string
 *                 example: 2025-10-19T00:00:00.000Z
 *               fechaFin:
 *                 type: string
 *                 example: 2025-10-25T00:00:00.000Z
 *     responses:
 *       200:
 *         description: Proyecto actualizado correctamente
 *       404:
 *         description: Proyecto no encontrado
 */
projectsRouter.put("/actualizar/:id", projectExist, updateProject)

/**
 * @swagger
 * /api/proyectos/eliminar/{id}:
 *   delete:
 *     summary: Elimina un proyecto
 *     tags: [Proyectos]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del proyecto a eliminar
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Proyecto eliminado correctamente
 *       404:
 *         description: Proyecto no encontrado
 */
projectsRouter.delete("/eliminar/:id", projectExist, deleteProject)


export default projectsRouter