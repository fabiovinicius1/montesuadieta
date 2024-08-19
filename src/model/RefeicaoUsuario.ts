import { AlimentoRefeicao } from "./AlimentoRefeicao";

export interface RefeicaoUsuario {
	id: number;
	nomeRefeicao: string;
	usuarioId: number;
	alimentosRefeicao?: AlimentoRefeicao[];
}