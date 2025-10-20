import { useState } from "react";
import http from "../services/api.js";

export default function ModalEstado({ onClose }) {
  const [nombreEstado, setNombreEstado] = useState("");

  const handleAddEstado = async (e) => {
    e.preventDefault();
    try {
      await http("POST", "estados/crear", { nombreEstado });
      onClose();
    } catch (error) {
      console.error("Error al agregar estado:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-zinc-900 p-6 rounded-2xl shadow-xl w-[90%] sm:w-[400px]">
        <h2 className="text-xl font-bold text-teal-400 mb-4 text-center">
          Agregar nuevo Estado
        </h2>
        <form onSubmit={handleAddEstado} className="space-y-4">
          <div>
            <label className="block text-sm text-zinc-400 mb-1">
              Nombre del estado
            </label>
            <input
              type="text"
              value={nombreEstado}
              onChange={(e) => setNombreEstado(e.target.value)}
              className="w-full p-2 rounded-lg bg-zinc-800 text-white"
              required
            />
          </div>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 rounded-lg text-white"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-teal-600 hover:bg-teal-500 rounded-lg text-white"
            >
              Agregar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
