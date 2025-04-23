import { Treino } from "../treino/Treino";

export interface Usuario {
    id?: number;
    nomeUsuario: string;
    email: string;
    senha: string;
    peso: number;
    altura: number;
    treinos?: Treino[];

    treinoIds?: number[];
  }
  