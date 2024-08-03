import { RefeicaoPatchNomeDto } from '../../dto/refeicaoDto/refeicaoPatchNomeDto';
import { UsuarioGetDeleteDto } from '../../dto/usuarioDto/usuarioGetDeleteDto';
import { RefeicaoUsuario } from '../../model/RefeicaoUsuario';
import { atualizarNomeRefeicaoRepository } from '../../repositories/refeicaoRepository';
import { buscarUsuarioPeloLoginRepository } from '../../repositories/usuarioRepository';


export const atualizarNomeRefeicaoUsuarioService = async (refeicaoPatchNomeDto: RefeicaoPatchNomeDto): Promise< RefeicaoUsuario| null> => {
	const usuarioGetDeleteDto: UsuarioGetDeleteDto = { "login": refeicaoPatchNomeDto.usuarioLogin };
	const result = await buscarUsuarioPeloLoginRepository(usuarioGetDeleteDto);
	if (result !== null) {
		return await atualizarNomeRefeicaoRepository(refeicaoPatchNomeDto);
	} else {
		return null;
	}
};
