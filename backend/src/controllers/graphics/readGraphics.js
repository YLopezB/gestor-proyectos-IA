import prisma from "../../prismaCliente.js";

const readGraphics = async (req, res, next) => {
  try {
    const states = await prisma.estado.findMany({
        include: { proyecto: true }
    })
    const result = states.map(state => ({
        nombre: state.nombreEstado,
        cantidad: state.proyecto.length
    }))
    return res.status(200).json(result)
  } catch (error) {
    next(error);
  }
};

export default readGraphics;
