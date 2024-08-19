import { AlimentoRefeicao } from "./AlimentoRefeicao";

export interface RefeicaoUsuario {
	nome: string;
	usuarioId: number;
	alimentosRefeicao?: AlimentoRefeicao[];
}