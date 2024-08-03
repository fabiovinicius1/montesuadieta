import { RefeicaoGetDto } from '../../dto/refeicaoDto/refeicaoGetDto';
import { RefeicaoUsuario } from '../../model/RefeicaoUsuario';
import { buscarRefeicaoPeloLoginUsuarioRepository } from '../../repositories/refeicaoRepository';

export const refeicaoUsuarioPesquisarService = async (refeicaoGetDto: RefeicaoGetDto): Promise<RefeicaoUsuario | null> => {
	return await buscarRefeicaoPeloLoginUsuarioRepository(refeicaoGetDto);
};