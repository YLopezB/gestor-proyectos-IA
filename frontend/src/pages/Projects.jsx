import { useState, useEffect } from "react";
import ProyectoModal from "../components/ModalProyecto";
import http from "../services/api.js";
import Table from "../components/Table";
import Button from "../components/Button";
import toast from "react-hot-toast";

function Projects() {
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProyecto, setEditingProyecto] = useState(null);

  useEffect(() => {
    fetchProyectos();
  }, []);

  const fetchProyectos = async () => {
    const data = await http("GET", "proyectos");
    setProyectos(data);
    setLoading(false);
  };

  const handleSaveProyecto = async (data) => {
    const response = await http("POST", `proyectos/crear`, data);
    fetchProyectos();
    toast.success(response.message);
    setIsModalOpen(true);
  };

  const handleEditTable = (proyecto) => {
    setEditingProyecto(proyecto);
    setIsModalOpen(true);
  };

  const handleEdit = async (proyectos) => {
    const response = await http("PUT", `proyectos/actualizar/${proyectos.id}`, proyectos)
    toast.success(response.message)
    fetchProyectos()
    setIsModalOpen(false);
  }

  const handleDelete = async (id) => {
    const response = await http("DELETE", `proyectos/eliminar/${id}`);
    fetchProyectos();
    toast.success(response.message);
  };

  if (loading)
    return (
      <p className="text-white text-center mt-10">Cargando proyectos...</p>
    );

  return (
    <section className="min-h-[80vh] bg-zinc-950 flex flex-col items-center justify-center py-16 px-4">
      <div className="w-full max-w-6xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl p-6 sm:p-8">
        <Table
          proyectos={proyectos}
          handleEditTable={handleEditTable}
          handleDelete={handleDelete}
        />
        <div className="flex justify-center mt-10">
          <Button message={"Agregar proyecto"} handle={setIsModalOpen} />
        </div>
      </div>
      <ProyectoModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingProyecto(null);
        }}
        onSave={handleSaveProyecto}
        proyecto={editingProyecto}
        handleEdit={handleEdit}
      />
    </section>
  );
}

export default Projects;
