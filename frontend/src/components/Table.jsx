import { Pencil, Trash2 } from "lucide-react";

function Table({ proyectos, handleEditTable, handleDelete }) {
  return (
    <>
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        📋 Lista de Proyectos
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-zinc-300">
          <thead>
            <tr className="bg-zinc-800 text-teal-400 uppercase text-xs sm:text-sm">
              <th className="px-4 py-3 text-left">Nombre</th>
              <th className="px-4 py-3 text-left">Descripción</th>
              <th className="px-4 py-3 text-left">Estado</th>
              <th className="px-4 py-3 text-left">Fecha Inicio</th>
              <th className="px-4 py-3 text-left">Fecha Fin</th>
              <th className="px-4 py-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {proyectos.length > 0 ? (
              proyectos.map((proyecto) => (
                <tr
                  key={proyecto.id}
                  className="border-b border-zinc-800 hover:bg-zinc-800/60 transition"
                >
                  <td className="px-4 py-3">{proyecto.nombre}</td>
                  <td className="px-4 py-3">{proyecto.descripcion}</td>
                  <td className="px-4 py-3">{proyecto.estado?.nombreEstado}</td>
                  <td className="px-4 py-3">
                    {new Date(proyecto.fechaInicio).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    {new Date(proyecto.fechaFin).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-center flex justify-center gap-3">
                    <button
                      onClick={() => handleEditTable(proyecto)}
                      className="p-2 bg-teal-600 hover:bg-teal-500 text-white rounded-lg transition"
                      title="Editar"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(proyecto.id)}
                      className="p-2 bg-red-600 hover:bg-red-500 text-white rounded-lg transition"
                      title="Eliminar"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-6 text-zinc-500 italic"
                >
                  No hay proyectos registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
