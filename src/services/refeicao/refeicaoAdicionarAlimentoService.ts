import { AlimentoNaoEncontrado } from '../../error/AlimentoNaoEncontrado';
import { RefeicaoNaoExiste } from '../../error/RefeicaoNaoExiste';
import { AlimentoRefeicao } from '../../model/AlimentoRefeicao';
import { adicionarAlimentoRefeicaoUsuarioRepository } from '../../repositories/alimentoRefeicaoRepository';
import { pesquisa1AlimentoAppPeloNomeRepository } from '../../repositories/alimetoAppRepository';
import { buscarRefeicaoUsusarioRepository } from '../../repositories/refeicaoRepository';

export const refeicaoAdicionarAlimentoService = async (refeicaoAlimento: any): Promise<AlimentoRefeicao | null> => {

	const refeicao = await buscarRefeicaoUsusarioRepository(refeicaoAlimento.id, refeicaoAlimento.nomeRefeicao);
	if (refeicao === null) {
		throw RefeicaoNaoExiste()
	}
	const alimento = await pesquisa1AlimentoAppPeloNomeRepository(refeicaoAlimento.nomeAlimento);
	if (alimento === null) {
		throw AlimentoNaoEncontrado()
	}
	return await adicionarAlimentoRefeicaoUsuarioRepository(refeicao, alimento);
};