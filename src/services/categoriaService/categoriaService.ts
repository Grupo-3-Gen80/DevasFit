import { Categoria } from "../../models/categoria/Categoria";
import { atualizar, buscar, cadastrar, deletar } from "../api";

// Buscar todas as categorias
export const buscarCategorias = async (setDados: Function) => {
  await buscar("/categorias", setDados);
};

// Buscar categoria por ID
export const buscarCategoriaPorId = async (id: number, setDados: Function) => {
  await buscar(`/categorias/${id}`, setDados);
};

// Buscar categoria por objetivo (palavra-chave)
export const buscarCategoriaPorObjetivo = async (objetivo: string, setDados: Function) => {
  await buscar(`/categorias/objetivo/${objetivo}`, setDados);
};

// Cadastrar nova categoria
export const cadastrarCategoria = async (dados: Categoria, setDados: Function) => {
  await cadastrar("/categorias", dados, setDados);
};

// Atualizar categoria existente
export const atualizarCategoria = async (dados: Categoria, setDados: Function) => {
  await atualizar("/categorias", dados, setDados);
};

// Deletar categoria
export const deletarCategoria = async (id: number) => {
  await deletar(`/categorias/${id}`);
};
