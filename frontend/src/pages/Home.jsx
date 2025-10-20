import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="relative bg-zinc-950">
      <div className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
        <img
          src="/inicial.jpg"
          alt="Proyectos"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/60 via-zinc-950/70 to-zinc-950"></div>

        <div className="relative z-10 text-center px-6 sm:px-8 max-w-3xl">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-[3px_3px_1px_rgba(0,0,0,0.9)]">
            Gestiona tus proyectos fácilmente
          </h1>

          <p className="text-zinc-200 text-lg sm:text-xl mt-4 drop-shadow-[2px_2px_1px_rgba(0,0,0,0.7)]">
            Buscas organizar tus proyectos y clasificarlos por categorias?
            intega tus proyectos y genera informes con IA
          </p>

          <div className="mt-8">
            <Link
              to="/proyectos"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              Explorar proyectos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
