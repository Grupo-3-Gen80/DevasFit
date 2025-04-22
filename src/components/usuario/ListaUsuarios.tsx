import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Usuario } from "../../models/usuario/Usuario";
import {
  buscarUsuarios,
  deletarUsuario,
} from "../../services/usuarioService/usuarioService";

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    buscarUsuarios(setUsuarios);
  }, []);

  function excluirUsuario(id: number) {
    if (window.confirm("Deseja excluir este usuário?")) {
      deletarUsuario(id).then(() => buscarUsuarios(setUsuarios));
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {usuarios.map((usuario) => (
        <div
          key={usuario.id}
          className="bg-white border border-[#f0d9e6] rounded-2xl shadow-lg p-6 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-bold text-[#C58BAA] mb-1">
              {usuario.nomeUsuario}
            </h3>
            <p className="text-gray-700 text-sm mb-1">Email: {usuario.email}</p>
            <p className="text-sm text-gray-500 italic mb-3">
              Altura: {usuario.altura} | Peso: {usuario.peso}
            </p>
          </div>

          <div className="flex justify-between gap-2 mt-4">
            <button
              onClick={() => navigate(`/usuarios/formulario/${usuario.id}`)}
              className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              ✏️ Editar
            </button>

            <button
              onClick={() => excluirUsuario(usuario.id)}
              className="bg-red-100 text-red-700 hover:bg-red-200 px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              🗑️ Deletar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
