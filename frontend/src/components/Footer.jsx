import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 mt-16 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-semibold text-lg text-white">
              Gestion de proyectos
            </span>
          </div>
          <p className="text-sm text-zinc-400">
            Gestiona tus proyectos, haz seguimiento y pide informes con IA
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Mapa del sitio
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-teal-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/proyectos" className="hover:text-teal-400 transition">
                Proyectos
              </Link>
            </li>
            <li>
              <Link to="/graficos" className="hover:text-teal-400 transition">
                Gráficos
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Gestiona los proyectos con nosotros.
          </h3>
          <p className="text-sm text-zinc-400 mb-4">
            Gestiona tus proyectos, pide informes todo en un solo lugar.
          </p>
          <div className="mt-8">
            <Link
              to="/graficos"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              Explorar graficos
            </Link>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-zinc-800 mt-8 py-4 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Proyecto de practica.</p>
      </div>
    </footer>
  );
}

export default Footer;
