import ListaTreinos from "../../components/treino/ListaTreinos";

export default function Treinos() {
  return (
    <section className="min-h-[70vh] bg-white p-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#C58BAA] mb-6 border-b-2 border-[#C58BAA] pb-2">
          Lista de Treinos
        </h2>
        <ListaTreinos />
      </div>
    </section>
  );
}
