import ListaCategorias from "../../components/categoria/ListaCategorias";

export default function Categorias() {
  return (
    <section className="min-h-[70vh] bg-white p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#C58BAA] mb-6 border-b-2 border-[#C58BAA] pb-2">
          Categorias de Treinos
        </h2>
        <ListaCategorias />
      </div>
    </section>
  );
}
