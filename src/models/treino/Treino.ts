import { Categoria } from "../categoria/Categoria";


export interface Treino {
  id: number;
  nomeTreino: string;
  descricao: string;
  videoUrl: string;
  categoria?: Categoria;
}
