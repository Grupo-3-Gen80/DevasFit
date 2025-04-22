import { useEffect, useState } from "react";
import { Categoria } from "../../models/categoria/Categoria";
import { buscarCategorias } from "../../services/categoriaService/categoriaService";


export default function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    buscarCategorias(setCategorias);
  }, []);

  return (
    <div className="grid gap-4">
      {categorias.map((categoria) => (
        <div
          key={categoria.id}
          className="bg-white p-4 rounded-xl shadow-md border-l-4 border-[#C58BAA]"
        >
          <h3 className="text-xl font-bold text-[#C58BAA]">{categoria.objetivo}</h3>
          <p className="text-gray-600">{categoria.descricao}</p>
        </div>
      ))}
    </div>
  );
}
