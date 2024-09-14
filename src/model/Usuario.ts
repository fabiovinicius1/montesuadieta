import { AlimentoUsuario } from "./AlimentoUsuario";
import { RefeicaoUsuario } from "./RefeicaoUsuario";

export interface Usuario {
	id?: number;
	login?: string;
	senha?: string;
	peso?: number;
	alimentosUsuario?: AlimentoUsuario[];
	refeicoesUsuario?: RefeicaoUsuario[];
}