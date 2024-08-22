import { AlimentoRefeicao } from "./AlimentoRefeicao";

export interface RefeicaoUsuario {
	nomeRefeicao?: string;
	usuarioId?: number;
	alimentosRefeicao?: AlimentoRefeicao[];
}