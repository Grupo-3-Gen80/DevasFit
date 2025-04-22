import { useNavigate } from "react-router-dom";
import ListaUsuarios from "../../components/usuario/ListaUsuarios";


export default function Usuarios() {
  const navigate = useNavigate();

  return (
    <section className="min-h-[70vh] bg-white p-6">
      <div className="max-w-5xl mx-auto">
        {/* Título + Botão na mesma linha */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-[#C58BAA] border-b-2 border-[#C58BAA] pb-2">
            Lista de Usuários
          </h2>

          <button
            onClick={() => navigate("/usuarios/formulario")}
            className="bg-[#C58BAA] text-white px-4 py-2 rounded-lg hover:bg-[#a4457a] transition-colors"
          >
            + Novo Usuário
          </button>
        </div>

        <ListaUsuarios />
      </div>
    </section>
  );
}
