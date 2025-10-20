import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-zinc-900 text-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">

        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
          <span className="font-semibold text-lg">Gestor de proyectos</span>
        </div>


        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-teal-400 transition">
            Home
          </Link>
          <Link to="/proyectos" className="hover:text-teal-400 transition">
            Proyectos
          </Link>
          <Link to="/graficos" className="hover:text-teal-400 transition">
            Gráficos
          </Link>
        </div>


        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>


      {isOpen && (
        <div className="md:hidden bg-zinc-800">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 hover:bg-zinc-700"
          >
            Home
          </Link>
          <Link
            to="/proyectos"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 hover:bg-zinc-700"
          >
            Proyectos
          </Link>
          <Link
            to="/graficos"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 hover:bg-zinc-700"
          >
            Gráficos
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
