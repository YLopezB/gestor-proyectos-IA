import prisma from "../../prismaCliente.js";
import aiService from "../../services/aiService.js";

const summary = async (req, res, next) => {
  try {
    const proyectos = await prisma.proyecto.findMany();

    if (!proyectos) {
      return res.status(200).json({ message: "No hay proyectos creados, sin datos para el análisis." });
    }

    const texto = proyectos.map((p) => p.descripcion).join("\n");
    const resumen = await aiService(texto);

    return res.status(200).json({ resumen });
  } catch (error) {
    console.error("Error en resumen:", error);
    next(error);
  }
};

export default summary;
