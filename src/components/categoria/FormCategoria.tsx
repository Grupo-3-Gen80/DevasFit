import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  atualizarCategoria,
  buscarCategoriaPorId,
  cadastrarCategoria,
} from "../../services/categoriaService/categoriaService";
import { Categoria } from "../../models/categoria/Categoria";

export default function FormCategoria() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    objetivo: "",
    descricao: "",
  });

  useEffect(() => {
    if (id) {
      buscarCategoriaPorId(Number(id), setCategoria);
    }
  }, [id]);

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function enviarFormulario(e: React.FormEvent) {
    e.preventDefault();

    try {
      if (id) {
        await atualizarCategoria(categoria, () => {});
        alert("Categoria atualizada com sucesso!");
      } else {
        const novaCategoria = { ...categoria, id: undefined }; // <== 👈 aqui é o segredo
        await cadastrarCategoria(novaCategoria, () => {});
        alert("Categoria cadastrada com sucesso!");
      }

      navigate("/categorias");
    } catch (error) {
      console.error("Erro ao salvar categoria:", error);
      alert("Erro ao salvar categoria.");
    }
  }

  return (
    <form
      onSubmit={enviarFormulario}
      className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-[#C58BAA] mb-4">
        {id ? "Editar Categoria" : "Cadastrar Categoria"}
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">Objetivo</label>
        <input
          type="text"
          name="objetivo"
          value={categoria.objetivo}
          onChange={atualizarEstado}
          className="w-full border border-gray-300 p-2 rounded mt-1"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-600">Descrição</label>
        <textarea
          name="descricao"
          value={categoria.descricao}
          onChange={atualizarEstado}
          className="w-full border border-gray-300 p-2 rounded mt-1"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-[#C58BAA] text-white px-4 py-2 rounded hover:bg-[#a4457a] transition-colors"
      >
        Salvar
      </button>
    </form>
  );
}
