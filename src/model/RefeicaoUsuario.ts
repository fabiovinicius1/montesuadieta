import { AlimentoRefeicao } from "./AlimentoRefeicao";

export interface RefeicaoUsuario {
	id: number;
	nome: string;
	usuarioLogin: string;
	alimentosRefeicao: AlimentoRefeicao[];
}