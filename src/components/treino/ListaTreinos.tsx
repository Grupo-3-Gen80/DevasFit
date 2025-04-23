import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Treino } from "../../models/treino/Treino";
import {
  buscarTreinos,
  deletarTreino,
} from "../../services/treinoService/treinoService";

export default function ListaTreinos() {
  const [treinos, setTreinos] = useState<Treino[]>([]);
  const [expandido, setExpandido] = useState<number | null>(null); // controla card aberto
  const navigate = useNavigate();

  useEffect(() => {
    buscarTreinos(setTreinos);
  }, []);

  function excluirTreino(id: number) {
    if (window.confirm("Tem certeza que deseja excluir este treino?")) {
      deletarTreino(id).then(() => buscarTreinos(setTreinos));
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {treinos.map((treino) => (
        <div
          key={treino.id}
          className="bg-white border border-[#f0d9e6] rounded-2xl shadow-lg p-6 flex flex-col justify-between transition-all duration-300"
        >
          <div>
            <h3 className="text-xl font-bold text-[#C58BAA] mb-1">
              {treino.nomeTreino}
            </h3>

            <p className="text-xs text-gray-500 italic mb-3">
              Categoria: {treino.categoria?.objetivo}
            </p>

            {expandido === treino.id && (
              <>
                <p className="text-gray-700 text-sm mb-3">{treino.descricao}</p>

                {treino.videoUrl && treino.videoUrl.includes("youtube") && (
                  <div className="mb-4">
                    <iframe
                      width="100%"
                      height="200"
                      className="rounded-lg shadow-sm border-0"
                      src={treino.videoUrl.replace("watch?v=", "embed/")}
                      title={treino.nomeTreino}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </>
            )}

            <button
              onClick={() =>
                setExpandido((prev) => (prev === treino.id ? null : treino.id))
              }
              className="text-sm text-purple-600 hover:underline mb-4"
            >
              {expandido === treino.id ? "⬆️ Recolher" : "⬇️ Ver mais"}
            </button>
          </div>

          <div className="flex justify-between gap-2 mt-2">
            <button
              onClick={() => navigate(`/treinos/formulario/${treino.id}`)}
              className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 rounded-lg text-sm font-medium transition"
            >
               Editar
            </button>

            <button
              onClick={() => excluirTreino(treino.id)}
              className="bg-red-100 text-red-700 hover:bg-red-200 px-4 py-2 rounded-lg text-sm font-medium transition"
            >
               Deletar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
