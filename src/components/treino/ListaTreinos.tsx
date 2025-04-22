import { useEffect, useState } from "react";
import { buscarTreinos } from "../../services/treinoService/treinoService";
import { Treino } from "../../models/treino/Treino";


export default function ListaTreinos() {
  const [treinos, setTreinos] = useState<Treino[]>([]);

  useEffect(() => {
    buscarTreinos(setTreinos);
  }, []);

  return (
    <div className="grid gap-6">
      {treinos.map((treino) => (
        <div
          key={treino.id}
          className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#C58BAA]"
        >
          <h3 className="text-xl font-bold text-[#C58BAA] mb-1">
            {treino.nomeTreino}
          </h3>
          <p className="text-gray-600 mb-2">{treino.descricao}</p>
          <p className="text-sm text-gray-500 italic">
            Categoria: {treino.categoria.objetivo}
          </p>
          {treino.videoUrl && (
            <a
              href={treino.videoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[#E25574] hover:underline text-sm mt-2 inline-block"
            >
              Ver vídeo instrucional
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
