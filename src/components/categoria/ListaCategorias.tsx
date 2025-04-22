import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Categoria } from "../../models/categoria/Categoria";
import {
  buscarCategorias,
  deletarCategoria,
} from "../../services/categoriaService/categoriaService";

export default function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    buscarCategorias(setCategorias);
  }, []);

  async function excluirCategoria(id?: number) {
    if (!id) return; // evita erros se id for undefined
    if (window.confirm("Deseja excluir esta categoria?")) {
      await deletarCategoria(id);
      await buscarCategorias(setCategorias);
    }
  }

  return (
    <section className="container mx-auto p-4">
      {/* Título e botão */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#C58BAA]">Lista de Categorias</h2>
        <button
          onClick={() => navigate("/categorias/formulario")}
          className="bg-[#C58BAA] text-white px-4 py-2 rounded hover:bg-[#a4457a] transition-colors"
        >
          + Nova Categoria
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {categorias.map((categoria) => (
          <div
            key={categoria.id}
            className="bg-white border border-[#f0d9e6] rounded-2xl shadow-lg p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-[#C58BAA] mb-1">
                {categoria.objetivo}
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                {categoria.descricao}
              </p>
            </div>

            <div className="flex justify-between gap-2 mt-4">
              <button
                onClick={() => navigate(`/categorias/formulario/${categoria.id}`)}
                className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                ✏️ Editar
              </button>

              <button
                onClick={() => excluirCategoria(categoria.id)}
                className="bg-red-100 text-red-700 hover:bg-red-200 px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                🗑️ Deletar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
