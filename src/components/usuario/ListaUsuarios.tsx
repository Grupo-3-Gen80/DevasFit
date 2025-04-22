import { useEffect, useState } from "react";
import { buscarUsuarios } from "../../services/usuarioService/usuarioService";
import { Usuario } from "../../models/usuario/Usuario";


export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    buscarUsuarios(setUsuarios);
  }, []);

  return (
    <div className="grid gap-4">
      {usuarios.map((usuario) => (
        <div
          key={usuario.id}
          className="bg-white p-4 rounded-xl shadow-md text-[#5C1D6B]"
        >
          <p className="text-lg font-bold">{usuario.nomeUsuario}</p>
          <p className="text-sm text-gray-600">{usuario.email}</p>
        </div>
      ))}
    </div>
  );
}
