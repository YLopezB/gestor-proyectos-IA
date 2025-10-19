import prisma from "../../prismaCliente.js";

const readState = async (req, res, next) => {
  try {
    const readStates = await prisma.estado.findMany({
      include: { proyecto: true },
    });
    return res.status(200).json(readStates);
  } catch (error) {
    next(error);
  }
};

const readStateId = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const readStateId = await prisma.estado.findFirst({
      where: { id },
      include: { proyecto: true }
    });
    return res.status(200).json(readStateId)
  } catch (error) {
    next(error);
  }
};

export { readState, readStateId };
