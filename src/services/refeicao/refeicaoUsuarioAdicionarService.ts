import { RefeicaoPostPutDto } from '../../dto/refeicaoDto/refeicaoPostPutDto';
import { UsuarioNaoExiste } from '../../error/UsuarioNaoExiste';
import { RefeicaoUsuario } from '../../model/RefeicaoUsuario';
import { adicionarRefeicaoUsuarioRepository } from '../../repositories/refeicaoRepository';
import { buscarUsuarioPeloIdRepository } from '../../repositories/usuarioRepository';

export const refeicaoUsuarioAdicionarService = async (refeicaoPostPutDto: RefeicaoPostPutDto): Promise<RefeicaoUsuario | null> => {
	const usuarioPesquisado = await buscarUsuarioPeloIdRepository(refeicaoPostPutDto.usuarioId)
	if (usuarioPesquisado === null) {
		throw UsuarioNaoExiste()
	}
	return await adicionarRefeicaoUsuarioRepository(refeicaoPostPutDto)
};