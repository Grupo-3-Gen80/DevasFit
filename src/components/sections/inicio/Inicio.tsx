import { useEffect, useState } from "react";


function Inicio() {
  // alternar entre 'a' e 'o'
  const [feminino, setFeminino] = useState(true);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFeminino((prev) => !prev);
    }, 2000); // tempo (2s)

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-[url('./src/assets/Devas.png')] text-center bg-cover">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Bem-vind{feminino ? "a" : "o"} ao Devas Fit
      </h1>
      <p className="text-lg md:text-xl mb-6 text-gray-300">
        Corpo em movimento, mente em equilíbrio.
      </p>
    </section>
  );
}

export default Inicio;