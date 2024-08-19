import { RefeicaoGetDeleteDto } from '../../dto/refeicaoDto/refeicaoGetDeleteDto';
import { RefeicaoUsuario } from '../../model/RefeicaoUsuario';
import { buscarRefeicaoPeloIdRepository } from '../../repositories/refeicaoRepository';

export const refeicaoUsuarioPesquisarService = async (refeicaoGetDeleteDto: RefeicaoGetDeleteDto): Promise<RefeicaoUsuario | null> => {
	return await buscarRefeicaoPeloIdRepository(refeicaoGetDeleteDto);
};