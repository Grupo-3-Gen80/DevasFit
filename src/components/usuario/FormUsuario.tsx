import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Usuario } from "../../models/usuario/Usuario";
import { atualizarUsuario, buscarUsuarioPorId, cadastrarUsuario } from "../../services/usuarioService/usuarioService";


export default function FormUsuario() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nomeUsuario: "",
    email: "",
    peso: 0,
    altura: 0,
  });

  useEffect(() => {
    if (id) {
      buscarUsuarioPorId(Number(id), setUsuario);
    }
  }, [id]);

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  async function enviarFormulario(e: React.FormEvent) {
    e.preventDefault();

    try {
      if (id) {
        await atualizarUsuario(usuario, () => {});
        alert("Usuário atualizado com sucesso!");
      } else {
        await cadastrarUsuario(usuario, () => {});
        alert("Usuário cadastrado com sucesso!");
      }

      navigate("/usuarios");
    } catch (error) {
      console.error("Erro ao salvar usuário:", error);
      alert("Erro ao salvar usuário.");
    }
  }

  return (
    <form
      onSubmit={enviarFormulario}
      className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-[#C58BAA] mb-4">
        {id ? "Editar Usuário" : "Cadastrar Usuário"}
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">Nome</label>
        <input
          type="text"
          name="nomeUsuario"
          value={usuario.nomeUsuario}
          onChange={atualizarEstado}
          className="w-full border border-gray-300 p-2 rounded mt-1"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">Email</label>
        <input
          type="email"
          name="email"
          value={usuario.email}
          onChange={atualizarEstado}
          className="w-full border border-gray-300 p-2 rounded mt-1"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">Peso (kg)</label>
        <input
          type="number"
          name="peso"
          value={usuario.peso}
          onChange={atualizarEstado}
          className="w-full border border-gray-300 p-2 rounded mt-1"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-600">Altura (m)</label>
        <input
          type="number"
          step="0.01"
          name="altura"
          value={usuario.altura}
          onChange={atualizarEstado}
          className="w-full border border-gray-300 p-2 rounded mt-1"
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
