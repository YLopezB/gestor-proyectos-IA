import prisma from "../prismaCliente.js";

const stateExist = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const isState = await prisma.estado.findFirst({
      where: { id },
    });
    if (!isState) {
      return res.status(404).json({ message: "Estado no encontrado" });
    }
    next()
  } catch (error) {
    next(error);
  }
};

export default stateExist;
