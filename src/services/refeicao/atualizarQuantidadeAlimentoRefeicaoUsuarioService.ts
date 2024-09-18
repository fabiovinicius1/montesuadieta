import { RefeicaoAlimentoPatchQuantidadeDto } from '../../dto/refeicaoDto/refeicaoAlimentoPatchQuantidade';
import { AlimentoNaoEncontrado } from '../../error/AlimentoNaoEncontrado';
import { AlimentoRefeicao } from '../../model/AlimentoRefeicao';
import { atualizarQuantidadeAlimentoRefeicaoRepository, pesquisarAlimentoRefeicaoRepository } from '../../repositories/alimentoRefeicaoRepository';


export const atualizarQuantidadeAlimentoRefeicaoUsuarioService = async (refeicaoAlimentoPatchQuantidadeDto: RefeicaoAlimentoPatchQuantidadeDto): Promise<AlimentoRefeicao | null> => {
	const result = await pesquisarAlimentoRefeicaoRepository(refeicaoAlimentoPatchQuantidadeDto);
	if (result === null) {
		throw AlimentoNaoEncontrado()
	}
	return await atualizarQuantidadeAlimentoRefeicaoRepository(refeicaoAlimentoPatchQuantidadeDto);
};
