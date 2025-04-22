
import ListaUsuarios from "../../components/usuario/ListaUsuarios";

export default function Usuarios() {
  return (
    <section className="min-h-[70vh] bg-white p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#C58BAA] mb-6 border-b-2 border-[#C58BAA] pb-2">
          Lista de Usuários
        </h2>
        <ListaUsuarios />
      </div>
    </section>
  );
}

  