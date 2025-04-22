
import Contato from "../../components/sections/contato/Contato";
import Inicio from "../../components/sections/inicio/Inicio";


function Home() {
  return (
    <main className="bg-[#F8F1EC] text-gray-800 font-serif">
      <Inicio />
      <Contato />
    </main>
  );
}

export default Home;
