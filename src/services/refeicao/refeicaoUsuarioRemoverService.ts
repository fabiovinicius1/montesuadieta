import { RefeicaoDeleteDto } from '../../dto/refeicaoDto/refeicaoDeleteDto';
import { UsuarioGetDeleteDto } from '../../dto/usuarioDto/usuarioGetDeleteDto';
import { RefeicaoUsuario } from '../../model/RefeicaoUsuario';
import { removerRefeicaoRepository } from '../../repositories/refeicaoRepository';
import { buscarUsuarioPeloLoginRepository } from '../../repositories/usuarioRepository';

export const refeicaoUsuarioRemoverService = async (refeicaoDeleteDto: RefeicaoDeleteDto): Promise<RefeicaoUsuario | null> => {
	const usuarioGetDeleteDto: UsuarioGetDeleteDto = { "login": refeicaoDeleteDto.usuarioLogin };
	const result = await buscarUsuarioPeloLoginRepository(usuarioGetDeleteDto);
	if (result !== null) {
		return await removerRefeicaoRepository(refeicaoDeleteDto)
	}
	else {
		return null;
	}
};