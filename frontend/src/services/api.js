import axios from "axios";
import API_URL from "./url.js";

export default async function http(method, path, body = null) {
  try {
    const url = `${API_URL}/${path}`;
    console.log("URL solicitada:", url);

    const config = {
      method: method.toUpperCase(),
      url,
      headers: { "Content-Type": "application/json" },
    };

    if (body && ["POST", "PUT"].includes(config.method)) {
      config.data = body;
    }

    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error("Error en la solicitud HTTP:", error);
    return {
      success: false,
      message:
        error.response?.data?.message ||
        "Ocurrió un error en la comunicación con el servidor.",
      status: error.response?.status || 500,
    };
  }
}
