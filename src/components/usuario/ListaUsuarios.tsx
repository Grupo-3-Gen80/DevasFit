import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Usuario } from "../../models/usuario/Usuario";
import {
  buscarUsuarios,
  deletarUsuario,
} from "../../services/usuarioService/usuarioService";
import { motion } from "framer-motion";

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    buscarUsuarios(setUsuarios);
  }, []);

  async function excluirUsuario(id?: number) {
    if (!id) return;
    if (window.confirm("Deseja excluir este usuário?")) {
      await deletarUsuario(id);
      await buscarUsuarios(setUsuarios);
    }
  }

  function classificarIMC(imc: number) {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Peso normal";
    if (imc < 30) return "Sobrepeso";
    if (imc < 35) return "Obesidade I";
    if (imc < 40) return "Obesidade II";
    return "Obesidade III";
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {usuarios.map((usuario) => {
        const imc = Number(
          (usuario.peso / (usuario.altura * usuario.altura)).toFixed(2)
        );
        const statusIMC = classificarIMC(imc);

        return (
          <motion.div
            key={usuario.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white border border-[#f0d9e6] rounded-2xl shadow-lg p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-[#C58BAA] mb-1">
                {usuario.nomeUsuario}
              </h3>
              <p className="text-sm text-gray-600 mb-1">Email: {usuario.email}</p>
              <p className="text-sm text-gray-600">
                Peso: {usuario.peso} kg | Altura: {usuario.altura} m
              </p>
              <p className="text-sm mt-2">
                IMC:{" "}
                <span className="font-bold text-[#C58BAA]">{imc}</span> -{" "}
                <span className="text-gray-600">{statusIMC}</span>
              </p>
            </div>

            <div className="flex justify-between gap-2 mt-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(`/usuarios/formulario/${usuario.id}`)}
                className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                ✏️ Editar
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => excluirUsuario(usuario.id)}
                className="bg-red-100 text-red-700 hover:bg-red-200 px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                🗑️ Deletar
              </motion.button>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
