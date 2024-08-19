import { RefeicaoPostPutDto } from '../../dto/refeicaoDto/refeicaoPostPutDto';
import { RefeicaoUsuario } from '../../model/RefeicaoUsuario';
import { adicionarRefeicaoUsuarioRepository } from '../../repositories/refeicaoRepository';

export const refeicaoUsuarioAdicionarService = async (refeicaoPostPutDto: RefeicaoPostPutDto): Promise<RefeicaoUsuario | null> => {
	return await adicionarRefeicaoUsuarioRepository(refeicaoPostPutDto)
};