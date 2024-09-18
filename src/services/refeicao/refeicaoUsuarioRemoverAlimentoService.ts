import { RefeicaoAlimentoGetDeleteDto } from '../../dto/refeicaoDto/RefeicaoAlimentoGetDeleteDto';
import { AlimentoRefeicaoNaoEncontrado } from '../../error/AlimentoRefeicaoNaoEncontrado';
import { AlimentoRefeicao } from '../../model/AlimentoRefeicao';
import { pesquisarAlimentoRefeicaoRepository, removerAlimentoRefeicaoRepository } from '../../repositories/alimentoRefeicaoRepository';

export const refeicaoUsuarioRemoverAlimentoService = async (refeicaoAlimentoGetDeleteDto: RefeicaoAlimentoGetDeleteDto): Promise<AlimentoRefeicao | null> => {
	const refeicaoAlimento = await pesquisarAlimentoRefeicaoRepository(refeicaoAlimentoGetDeleteDto);
	if (refeicaoAlimento === null) {
		throw AlimentoRefeicaoNaoEncontrado()
	}
	return await removerAlimentoRefeicaoRepository(refeicaoAlimentoGetDeleteDto)
};