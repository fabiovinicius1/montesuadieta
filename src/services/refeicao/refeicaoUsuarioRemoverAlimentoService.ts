import { RefeicaoAlimentoDeleteDto } from '../../dto/refeicaoDto/RefeicaoAlimentoDeleteDto';
import { AlimentoRefeicaoNaoEncontrado } from '../../error/AlimentoRefeicaoNaoEncontrado';
import { AlimentoRefeicao } from '../../model/AlimentoRefeicao';
import { pesquisarAlimentoRefeicaoRepository, removerAlimentoRefeicaoRepository } from '../../repositories/alimentoRefeicaoRepository';

export const refeicaoUsuarioRemoverAlimentoService = async (refeicaoAlimentoDeleteDto: RefeicaoAlimentoDeleteDto): Promise<AlimentoRefeicao | null> => {
	const refeicaoAlimento = await pesquisarAlimentoRefeicaoRepository(refeicaoAlimentoDeleteDto);
	if (refeicaoAlimento === null) {
		throw AlimentoRefeicaoNaoEncontrado()
	}
	return await removerAlimentoRefeicaoRepository(refeicaoAlimentoDeleteDto)
};