import prisma from "../../prismaCliente.js";

const create = async (req, res, next) => {
  try {
    const createState = await prisma.estado.create({
      data: req.body,
    });
    return res.status(201).json(createState);
  } catch (error) {
    next(error);
  }
};

export default create;