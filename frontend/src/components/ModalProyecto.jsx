import { useState, useEffect } from "react";
import http from "../services/api.js";
import ModalEstado from "./ModalEstado.jsx";
import Button from "./Button";

export default function ModalProyecto({
  isOpen,
  onClose,
  onSave,
  proyecto,
  handleEdit,
}) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [estadoID, setEstadoID] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [estados, setEstados] = useState([]);
  const [showModalEstado, setShowModalEstado] = useState(false);

  useEffect(() => {
    if (isOpen) {
      fetchEstados();
      if (proyecto) {
        setNombre(proyecto.nombre || "");
        setDescripcion(proyecto.descripcion || "");
        setEstadoID(proyecto.estadoID || proyecto.estado?.id || "");
        setFechaInicio(proyecto.fechaInicio?.split("T")[0] || "");
        setFechaFin(proyecto.fechaFin?.split("T")[0] || "");
      } else {
        setNombre("");
        setDescripcion("");
        setEstadoID("");
        setFechaInicio("");
        setFechaFin("");
      }
    }
  }, [isOpen, proyecto]);

  const fetchEstados = async () => {
    const data = await http("GET", "estados");
    setEstados(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoProyecto = {
      nombre,
      descripcion,
      estadoID: Number(estadoID),
      fechaInicio,
      fechaFin,
    };

    proyecto
      ? await handleEdit({ id: proyecto.id, ...nuevoProyecto })
      : onSave(nuevoProyecto);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
        <div className="bg-zinc-900 p-6 rounded-2xl shadow-xl w-[90%] sm:w-[500px]">
          <h2 className="text-xl font-semibold text-white mb-4 text-center">
            {proyecto ? "✏️ Editar Proyecto" : "➕ Nuevo Proyecto"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Nombre</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full p-2 rounded-lg bg-zinc-800 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-1">
                Descripción
              </label>
              <textarea
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                className="w-full p-2 rounded-lg bg-zinc-800 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-1">Estado</label>
              <div className="flex gap-2">
                <select
                  value={estadoID}
                  onChange={(e) => setEstadoID(e.target.value)}
                  className="flex-1 p-2 rounded-lg bg-zinc-800 text-white"
                  required
                >
                  <option value="">Selecciona un estado</option>
                  {estados.map((estado) => (
                    <option key={estado.id} value={estado.id}>
                      {estado.nombreEstado}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => setShowModalEstado(true)}
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-500 rounded-lg text-white"
                >
                  Agregar estado
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm text-zinc-400 mb-1">
                  Fecha Inicio
                </label>
                <input
                  type="date"
                  value={fechaInicio}
                  onChange={(e) => setFechaInicio(e.target.value)}
                  className="w-full p-2 rounded-lg bg-zinc-800 text-white"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm text-zinc-400 mb-1">
                  Fecha Fin
                </label>
                <input
                  type="date"
                  value={fechaFin}
                  onChange={(e) => setFechaFin(e.target.value)}
                  className="w-full p-2 rounded-lg bg-zinc-800 text-white"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-4">
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
                {proyecto ? "Editar" : "Guardar"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {showModalEstado && (
        <ModalEstado
          onClose={() => {
            setShowModalEstado(false);
            fetchEstados();
          }}
        />
      )}
    </>
  );
}
