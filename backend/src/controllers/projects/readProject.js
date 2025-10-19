import prisma from "../../prismaCliente.js";

const readProject = async (req, res, next) => {
  try {
    const readProjects = await prisma.proyecto.findMany({
      include: { estado: true }
    });
    return res.status(200).json(readProjects);
  } catch (error) {
    next(error);
  }
};

const readProjectId = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const readProject = await prisma.proyecto.findFirst({
      where: { id },
      include: { estado: true },
    });
    return res.status(200).json(readProject);
  } catch (error) {
    next(error);
  }
};

export { readProject, readProjectId };
