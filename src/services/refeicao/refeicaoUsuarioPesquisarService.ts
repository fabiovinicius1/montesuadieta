import { RefeicaoGetDeleteDto } from '../../dto/refeicaoDto/refeicaoGetDeleteDto';
import { RefeicaoUsuario } from '../../model/RefeicaoUsuario';
import { buscarRefeicaoPeloLoginUsuarioRepository } from '../../repositories/refeicaoRepository';

export const refeicaoUsuarioPesquisarService = async (refeicaoGetDeleteDto: RefeicaoGetDeleteDto): Promise<RefeicaoUsuario | null> => {
	return await buscarRefeicaoPeloLoginUsuarioRepository(refeicaoGetDeleteDto);
};