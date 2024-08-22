import { RefeicaoAlimentoPostDto } from '../../dto/refeicaoDto/refeicaoAlimentoPostDto';
import { RefeicaoGetDeleteDto } from '../../dto/refeicaoDto/refeicaoGetDeleteDto';
import { AlimentoNaoEncontrado } from '../../error/AlimentoNaoEncontrado';
import { RefeicaoNaoExiste } from '../../error/RefeicaoNaoExiste';
import { AlimentoRefeicao } from '../../model/AlimentoRefeicao';
import { adicionarAlimentoRefeicaoRepository } from '../../repositories/alimentoRefeicaoRepository';
import { pesquisaAlimentoAppPeloIdRepository } from '../../repositories/alimetoAppRepository';
import { buscarRefeicaoPeloIdRepository } from '../../repositories/refeicaoRepository';

export const refeicaoUsuarioAdicionarAlimentoService = async (refeicaoAlimentoPostDeleteDto: RefeicaoAlimentoPostDto): Promise<AlimentoRefeicao | null> => {
	const refeicaoGetDeleteDto: RefeicaoGetDeleteDto = { "id": refeicaoAlimentoPostDeleteDto.idRefeicao };
	const refeicao = await buscarRefeicaoPeloIdRepository(refeicaoGetDeleteDto);
	if (refeicao === null) {
		throw RefeicaoNaoExiste()
	}
	const alimento = await pesquisaAlimentoAppPeloIdRepository(refeicaoAlimentoPostDeleteDto.idAlimento);
	if (alimento === null) {
		throw AlimentoNaoEncontrado()
	}
	return await adicionarAlimentoRefeicaoRepository(refeicaoAlimentoPostDeleteDto, alimento);
};