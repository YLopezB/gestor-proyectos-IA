import prisma from "../../prismaCliente.js";

const deleteState = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const deleteState = await prisma.estado.delete({
      where: { id },
    });
    return res.status(200).json(deleteState)
  } catch (error) {
    next(error);
  }
};

export default deleteState;
