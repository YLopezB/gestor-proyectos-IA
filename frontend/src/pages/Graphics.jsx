import { useEffect, useState } from "react";
import http from "../services/api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Brain } from "lucide-react";
import toast from "react-hot-toast";

function Graphics() {
useEffect(()=> {
  fetchData()
}, [])

  const fetchData = async () => {
    const data = await http("GET", "graficos")
    console.log(data);
    
    setData(data);
  };

  const [data, setData] = useState([]);
  const [informe, setInforme] = useState("");

  const generarResumen = async () => {
    const response = await http("POST", "analisis")
    toast.success(response.message)
    setInforme(response.data);
  };

  const totalProyectos = data.reduce((sum, item) => sum + item.cantidad, 0);

  return (
    <section className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-start py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-teal-400">
        Total de Proyectos: {totalProyectos}
      </h1>

      <div className="w-full max-w-5xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-lg p-6 mb-10">
        <h2 className="text-2xl font-semibold text-teal-300 mb-4 text-center">
          Distribución por Estado
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
            <XAxis dataKey="nombre" stroke="#a1a1aa" />
            <YAxis stroke="#a1a1aa" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#18181b",
                border: "1px solid #27272a",
                color: "#f4f4f5",
              }}
            />
            <Bar
              dataKey="cantidad"
              fill="#14b8a6"
              barSize={40}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="w-full max-w-3xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-lg p-6 mb-10">
        <h3 className="text-xl font-semibold text-teal-300 mb-4 text-center">
          Resumen de Estados
        </h3>
        <table className="w-full text-left text-zinc-300">
          <thead className="bg-zinc-800 text-teal-400 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Estado</th>
              <th className="px-4 py-3">Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="border-b border-zinc-800 hover:bg-zinc-800/60 transition"
              >
                <td className="px-4 py-3">{item.nombre}</td>
                <td className="px-4 py-3">{item.cantidad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-lg p-8">
        <div className="flex flex-col items-center">
          <button
            onClick={generarResumen}
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 rounded-lg font-medium transition"
          >
            <Brain size={20} /> Generar resumen con IA
          </button>

          <div className="mt-6 w-full bg-zinc-800 border border-zinc-700 rounded-xl p-4 text-sm text-zinc-300 min-h-[150px]">
            {informe ? (
              <p>{informe}</p>
            ) : (
              <p className="text-zinc-500 italic text-center">
                El resumen se generará aquí...
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Graphics;
