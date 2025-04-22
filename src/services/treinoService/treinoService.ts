import { Treino } from "../../models/treino/Treino";
import api, {  buscar, deletar } from "../api";



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
  const treinoMin = {
    nomeTreino: dados.nomeTreino,
    descricao: dados.descricao,
    videoUrl: dados.videoUrl,
    categoria: { id: dados.categoria.id },
  };

  const resposta = await api.post("/treinos", treinoMin);
  setDados(resposta.data);
};


// Atualizar treino
export const atualizarTreino = async (dados: Treino, setDados: Function) => {
  const treinoMin = {
    id: dados.id,
    nomeTreino: dados.nomeTreino,
    descricao: dados.descricao,
    videoUrl: dados.videoUrl,
    categoria: { id: dados.categoria.id },
  };

  const resposta = await api.put("/treinos", treinoMin);
  setDados(resposta.data);
};


// Deletar treino
export const deletarTreino = async (id: number) => {
  await deletar(`/treinos/${id}`);
};
