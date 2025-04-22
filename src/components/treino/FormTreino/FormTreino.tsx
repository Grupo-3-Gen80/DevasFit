import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Categoria } from "../../../models/categoria/Categoria";
import { Treino } from "../../../models/treino/Treino";
import { buscarCategorias } from "../../../services/categoriaService/categoriaService";
import { atualizarTreino, buscarTreinoPorId, cadastrarTreino } from "../../../services/treinoService/treinoService";


export default function FormTreino() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [treino, setTreino] = useState<Treino>({
    id: 0,
    nomeTreino: "",
    descricao: "",
    videoUrl: "",
    categoria: { id: 0, objetivo: "", descricao: "" },
  });

  useEffect(() => {
    buscarCategorias(setCategorias);
  }, []);

  useEffect(() => {
    if (id) {
      buscarTreinoPorId(Number(id), setTreino);
    }
  }, [id]);

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setTreino({
      ...treino,
      [e.target.name]: e.target.value,
    });
  }

  function atualizarCategoria(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedCategoria = categorias.find(
      (c) => c.id === Number(e.target.value)
    );
    if (selectedCategoria) {
      setTreino({ ...treino, categoria: selectedCategoria });
    }
  }

  async function enviarFormulario(e: React.FormEvent) {
    e.preventDefault();

    try {
      if (id) {
        await atualizarTreino(treino, () => {});
        alert("Treino atualizado com sucesso!");
      } else {
        await cadastrarTreino(treino, () => {});
        alert("Treino cadastrado com sucesso!");
      }

      navigate("/treinos");
    } catch (error) {
      console.error("Erro ao salvar treino:", error);
      alert("Erro ao salvar treino. Verifique os campos e tente novamente.");
    }
  }

  return (
    <form
      onSubmit={enviarFormulario}
      className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-[#C58BAA] mb-4">
        {id ? "Editar Treino" : "Cadastrar Treino"}
      </h2>

      {/* NOME DO TREINO */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">
          Nome do Treino
        </label>
        <input
          type="text"
          name="nomeTreino"
          value={treino.nomeTreino}
          onChange={atualizarEstado}
          className="w-full border border-gray-300 p-2 rounded mt-1"
          required
        />
      </div>

      {/* DESCRIÇÃO */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">
          Descrição
        </label>
        <textarea
          name="descricao"
          value={treino.descricao}
          onChange={atualizarEstado}
          className="w-full border border-gray-300 p-2 rounded mt-1"
          required
        ></textarea>
      </div>

      {/* VÍDEO */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">
          Vídeo (URL)
        </label>
        <input
          type="url"
          name="videoUrl"
          value={treino.videoUrl}
          onChange={atualizarEstado}
          className="w-full border border-gray-300 p-2 rounded mt-1"
        />
      </div>

      {/* CATEGORIA (AQUI FICA O SELECT!) */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-600">
          Categoria
        </label>
        <select
          name="categoria"
          value={treino.categoria?.id || ""}
          onChange={atualizarCategoria}
          className="w-full border border-gray-300 p-2 rounded mt-1"
          required
        >
          <option value="">Selecione uma categoria</option>
          {categorias.map((categoria) => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.objetivo}
            </option>
          ))}
        </select>
      </div>

      {/* BOTÃO */}
      <button
        type="submit"
        className="bg-[#C58BAA] text-white px-4 py-2 rounded hover:bg-[#a4457a] transition-colors"
      >
        Salvar
      </button>
    </form>
  );
}
