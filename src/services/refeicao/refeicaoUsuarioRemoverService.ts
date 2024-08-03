import { RefeicaoGetDeleteDto } from '../../dto/refeicaoDto/refeicaoGetDeleteDto';
import { UsuarioGetDeleteDto } from '../../dto/usuarioDto/usuarioGetDeleteDto';
import { RefeicaoUsuario } from '../../model/RefeicaoUsuario';
import { removerRefeicaoRepository } from '../../repositories/refeicaoRepository';
import { buscarUsuarioPeloLoginRepository } from '../../repositories/usuarioRepository';

export const refeicaoUsuarioRemoverService = async (refeicaoGetDeleteDto: RefeicaoGetDeleteDto): Promise<RefeicaoUsuario | null> => {
	const usuarioGetDeleteDto: UsuarioGetDeleteDto = { "login": refeicaoGetDeleteDto.usuarioLogin };
	const result = await buscarUsuarioPeloLoginRepository(usuarioGetDeleteDto);
	if (result !== null) {
		return await removerRefeicaoRepository(refeicaoGetDeleteDto)
	}
	else {
		return null;
	}
};