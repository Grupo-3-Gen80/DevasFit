import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  // Alterna entre "a" e "o" no título
  const [feminino, setFeminino] = useState(true);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFeminino((prev) => !prev);
    }, 2000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 text-center bg-[url('./src/assets/Devas.png')] bg-cover bg-center"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
        Bem-vind{feminino ? "a" : "o"} ao <span className="text-[#fc0e8d]">Devas Fit</span>
      </h1>

      <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl">
        Aqui você pode gerenciar treinos personalizados, categorias e acompanhar seus resultados de forma prática e moderna.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => navigate("/treinos")}
          className="bg-[#C58BAA] text-white px-6 py-3 rounded-lg hover:bg-[#a4457a] transition shadow-lg"
        >
          Ver Treinos
        </button>

        <button
          onClick={() => navigate("/categorias")}
          className="bg-[#A8DADC] text-[#1D3557] px-6 py-3 rounded-lg hover:bg-[#89c2d9] transition shadow-lg"
        >
          Ver Categorias
        </button>

        <button
          onClick={() => navigate("/usuarios")}
          className="bg-[#FFE066] text-[#6B4C1E] px-6 py-3 rounded-lg hover:bg-[#ffd54f] transition shadow-lg"
        >
          Ver Usuários
        </button>
      </div>
    </section>
  );
}
