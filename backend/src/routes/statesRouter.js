import { Router } from "express";
import create from "../controllers/states/createState.js";
import { readState, readStateId } from "../controllers/states/readState.js";
import updateState from "../controllers/states/updateState.js";
import deleteState from "../controllers/states/deleteState.js";
import stateExist from "../middlewares/stateExist.js";

const statesRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Estados
 *   description: Gestión de los estados de los proyectos
 */

/**
 * @swagger
 * /api/estados/:
 *   get:
 *     summary: Obtener todos los estados con sus proyectos asociados
 *     tags: [Estados]
 *     responses:
 *       200:
 *         description: Lista de estados con todos los proyectos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Estado'
 */

statesRouter.get("/", readState);

/**
 * @swagger
 * /api/estados/{id}:
 *   get:
 *     summary: Obtener un estado por su ID
 *     tags: [Estados]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del estado
 *     responses:
 *       200:
 *         description: Estado encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Estado'
 *       404:
 *         description: Estado no encontrado
 */
statesRouter.get("/:id", stateExist, readStateId);

/**
 * @swagger
 * /api/estados/crear:
 *   post:
 *     summary: Crear un nuevo estado
 *     tags: [Estados]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombreEstado:
 *                 type: string
 *                 example: En desarrollo
 *     responses:
 *       201:
 *         description: Estado creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Estado'
 */
statesRouter.post("/crear", create);

/**
 * @swagger
 * /api/estados/actualizar/{id}:
 *   put:
 *     summary: Actualizar un estado existente
 *     tags: [Estados]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del estado a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombreEstado:
 *                 type: string
 *                 example: Finalizado
 *     responses:
 *       200:
 *         description: Estado actualizado exitosamente
 *       404:
 *         description: Estado no encontrado
 */
statesRouter.put("/actualizar/:id", stateExist, updateState);

/**
 * @swagger
 * /api/estados/eliminar/{id}:
 *   delete:
 *     summary: Eliminar un estado por su ID
 *     tags: [Estados]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del estado a eliminar
 *     responses:
 *       200:
 *         description: Estado eliminado exitosamente
 *       404:
 *         description: Estado no encontrado
 */
statesRouter.delete("/eliminar/:id", stateExist, deleteState);

export default statesRouter;
