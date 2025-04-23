import { useEffect, useState } from "react";
import { Usuario } from "../../models/usuario/Usuario";
import { buscarUsuarios, buscarUsuarioPorId } from "../../services/usuarioService/usuarioService";

export default function ResumoTreino() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    async function carregarUsuariosComTreinos() {
      const usuariosBase: Usuario[] = [];
      await buscarUsuarios(async (listaBase: Usuario[]) => {
        for (const u of listaBase) {
          await buscarUsuarioPorId(u.id!, (completo: Usuario) => {
            usuariosBase.push(completo);
          });
        }
        setUsuarios(usuariosBase);
      });
    }

    carregarUsuariosComTreinos();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-[#C58BAA]">Resumo de Treinos</h2>

      {usuarios.map(usuario => (
        <div key={usuario.id} className="bg-white shadow-md p-6 rounded-xl mb-6 border border-[#f3d6e6]">
          <h3 className="text-xl font-bold text-[#C58BAA]">{usuario.nomeUsuario}</h3>
          <p className="text-sm text-gray-600 mb-2">Email: {usuario.email}</p>

          <h4 className="font-semibold mt-3 text-[#a4457a]">Treinos:</h4>
          <ul className="list-disc ml-5">
            {usuario.treinos?.length ? (
              usuario.treinos.map(treino => (
                <li key={treino.id} className="mt-1">
                  <span className="font-semibold">{treino.nomeTreino}</span> –{" "}
                  <span className="italic text-sm text-gray-700">
                    Categoria: {treino.categoria?.objetivo ?? "Sem categoria"}
                  </span>
                </li>
              ))
            ) : (
              <li className="text-sm text-gray-500">Nenhum treino associado</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}
