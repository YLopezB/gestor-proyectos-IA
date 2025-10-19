import prisma from "../../prismaCliente.js";

const updateState = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const update = await prisma.estado.update({
      where: { id },
      data: req.body,
      include: { proyecto: true },
    });
    return res.status(200).json(update);
  } catch (error) {
    next();
  }
};

export default updateState;
