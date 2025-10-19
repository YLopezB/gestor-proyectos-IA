import prisma from "../../prismaCliente.js";

const deleteProject = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const deleteProject = await prisma.proyecto.delete({
      where: { id },
    });
    return res.status(200).json(deleteProject);
  } catch (error) {
    next(error);
  }
};

export default deleteProject;
