import { AlimentoUsuario } from "./AlimentoUsuario";
import { RefeicaoUsuario } from "./RefeicaoUsuario";

export interface Usuario {
	id: string;
	login: string;
	senha: string;
	peso: number;
	alimentosUsuario?: AlimentoUsuario[];
	refeicoesUsuario?: RefeicaoUsuario[];
}