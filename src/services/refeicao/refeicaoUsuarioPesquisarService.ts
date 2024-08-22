import { RefeicaoGetDeleteDto } from '../../dto/refeicaoDto/refeicaoGetDeleteDto';
import { RefeicaoNaoExiste } from '../../error/RefeicaoNaoExiste';
import { RefeicaoUsuario } from '../../model/RefeicaoUsuario';
import { buscarRefeicaoPeloIdRepository } from '../../repositories/refeicaoRepository';

export const refeicaoUsuarioPesquisarService = async (refeicaoGetDeleteDto: RefeicaoGetDeleteDto): Promise<RefeicaoUsuario | null> => {
	const result = await buscarRefeicaoPeloIdRepository(refeicaoGetDeleteDto);
	if (result === null) {
		throw RefeicaoNaoExiste()
	}
	return result;
};