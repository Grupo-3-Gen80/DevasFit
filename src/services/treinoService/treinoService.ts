import { Treino } from "../../models/treino/Treino";
import { atualizar, buscar, cadastrar, deletar } from "../api";



// Buscar todos os treinos
export const buscarTreinos = async (setDados: Function) => {
  await buscar("/treinos", setDados);
};

// Buscar treino por ID
export const buscarTreinoPorId = async (id: number, setDados: Function) => {
  await buscar(`/treinos/${id}`, setDados);
};

// Buscar treino por nome
export const buscarTreinoPorNome = async (nome: string, setDados: Function) => {
  await buscar(`/treinos/nometreino/${nome}`, setDados);
};

// Cadastrar treino
export const cadastrarTreino = async (dados: Treino, setDados: Function) => {
  await cadastrar("/treinos", dados, setDados);
};

// Atualizar treino
export const atualizarTreino = async (dados: Treino, setDados: Function) => {
  await atualizar("/treinos", dados, setDados);
};

// Deletar treino
export const deletarTreino = async (id: number) => {
  await deletar(`/treinos/${id}`);
};
