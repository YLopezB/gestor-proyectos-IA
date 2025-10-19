import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config.js";

const genAI = new GoogleGenerativeAI(process.env.AI_API);

const aiService = async (text) => {
  if (!text || text.trim().length === 0) {
    return "No hay texto para analizar.";
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
      Elabora un resumen estadístico breve y profesional con base en las siguientes descripciones de proyectos.
      Menciona:
      - La cantidad total de proyectos.
      - Los temas o palabras más frecuentes.
      - Un resumen corto del contenido general.
      Presenta el resultado en formato Markdown.

      Descripciones:
      ${text}
    `;

    const result = await model.generateContent(prompt);

    // Extrae el texto generado
    const resumen = result.response.text();

    return resumen;
  } catch (error) {
    console.error("Error en aiService:", error);
    return "Error al generar el resumen con Gemini.";
  }
};

export default aiService;
