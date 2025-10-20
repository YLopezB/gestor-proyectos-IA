export default function ProjectTable({ projects }) {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md mt-4">
      <table className="w-full text-sm text-left border">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Descripción</th>
            <th className="px-4 py-2">Estado</th>
            <th className="px-4 py-2">Inicio</th>
            <th className="px-4 py-2">Fin</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p.id} className="border-t">
              <td className="px-4 py-2">{p.id}</td>
              <td className="px-4 py-2">{p.nombre}</td>
              <td className="px-4 py-2">{p.descripcion}</td>
              <td className="px-4 py-2">{p.estado?.nombreEstado}</td>
              <td className="px-4 py-2">
                {p.fechaInicio
                  ? new Date(p.fechaInicio).toLocaleDateString()
                  : "-"}
              </td>
              <td className="px-4 py-2">
                {p.fechaFin ? new Date(p.fechaFin).toLocaleDateString() : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
