import { UsuarioPostPutRequestDTO } from '../../dto/usuarioDto/usuarioPostPutRequestDTO';
import { LoginJaExiste } from '../../error/LoginJaExiste';
import { Usuario } from '../../model/Usuario';
import { adicionarUsuarioRepository, buscarUsuarioPeloLoginRepository } from '../../repositories/usuarioRepository';

export const adicionarUsuarioService = async (usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO): Promise<Usuario | null> => {
	const result = await buscarUsuarioPeloLoginRepository(usuarioPostPutRequestDTO.login);
	if (result === null) {
		return await adicionarUsuarioRepository(usuarioPostPutRequestDTO);
	}
	throw LoginJaExiste()
};
