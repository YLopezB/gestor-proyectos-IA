import prisma from "../prismaCliente.js";

const projectExist = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const isProject = await prisma.proyecto.findFirst({
      where: { id },
    });
    if (!isProject) {
      return res.status(404).json({ message: "Proyecto no encontrado" });
    }
    next()
  } catch (error) {
    next(error);
  }
};

export default projectExist;
