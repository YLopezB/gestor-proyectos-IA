import prisma from "../../prismaCliente.js";

const updateProject = async (req, res, next) => {
  try {
    const { nombre, descripcion, estadoID, fechaInicio, fechaFin } = req.body;
    const id = parseInt(req.params.id);
    const data = await prisma.proyecto.update({
      where: { id },
      data: {
        nombre,
        descripcion,
        estadoID,
        fechaInicio: new Date(fechaInicio),
        fechaFin: new Date(fechaFin),
      }
    })
    return res.status(200).json({
      success: true,
      message: "Proyecto actualizado con éxito",
      data
    });
  } catch (error) {
    next(error);
  }
};

export default updateProject;
