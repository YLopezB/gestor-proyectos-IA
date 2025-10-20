import prisma from "../../prismaCliente.js";

const create = async (req, res, next) => {
  try {
    const { nombre, descripcion, estadoID, fechaInicio, fechaFin } = req.body;
    const data = await prisma.proyecto.create({
      data: {
        nombre,
        descripcion,
        estadoID,
        fechaInicio: new Date(fechaInicio),
        fechaFin: new Date(fechaFin),
      },
    });
    return res.status(201).json({
      success: true,
      message: "proyecto creado con exito",
      data
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default create;
