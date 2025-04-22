import { Usuario } from "../../models/usuario/Usuario";
import { atualizar, buscar, cadastrar, deletar } from "../api";


// Buscar todos os usuários
export const buscarUsuarios = async (setDados: Function) => {
  await buscar("/usuarios/all", setDados);
};

// Buscar usuário por ID
export const buscarUsuarioPorId = async (id: number, setDados: Function) => {
  await buscar(`/usuarios/${id}`, setDados);
};

// Cadastrar usuário
export const cadastrarUsuario = async (dados: Usuario, setDados: Function) => {
  await cadastrar("/usuarios/cadastrar", dados, setDados);
};

// Atualizar usuário
export const atualizarUsuario = async (dados: Usuario, setDados: Function) => {
  await atualizar("/usuarios/atualizar", dados, setDados);
};

// Calcular IMC
export const calcularIMC = async (id: number, setDados: Function) => {
  await buscar(`/usuarios/${id}/imc`, setDados);
};

// Deletar usuário
export const deletarUsuario = async (id: number) => {
  await deletar(`/usuarios/${id}`);
};
