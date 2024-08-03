import { RefeicaoPostPutDto } from '../../dto/refeicaoDto/refeicaoPostPutDto';
import { UsuarioGetDeleteDto } from '../../dto/usuarioDto/usuarioGetDeleteDto';
import { RefeicaoUsuario } from '../../model/RefeicaoUsuario';
import { adicionarRefeicaoUsuarioRepository } from '../../repositories/refeicaoRepository';
import { buscarUsuarioPeloLoginRepository } from '../../repositories/usuarioRepository';

export const refeicaoUsuarioAdicionarService = async (refeicaoPostPutDto: RefeicaoPostPutDto): Promise<RefeicaoUsuario | null> => {
	const usuarioGetDeleteDto: UsuarioGetDeleteDto = {"login": refeicaoPostPutDto.usuarioLogin};
	const result = await buscarUsuarioPeloLoginRepository(usuarioGetDeleteDto);
	if (result !== null) {
		return await adicionarRefeicaoUsuarioRepository(refeicaoPostPutDto)
	}
	else {
		return null;
	}
};