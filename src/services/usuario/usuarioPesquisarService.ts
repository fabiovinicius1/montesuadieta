import { UsuarioGetDeleteRequestDTO } from '../../dto/usuarioDto/usuarioGetDeleteRequestDTO';
import { UsuarioNaoExiste } from '../../error/UsuarioNaoExiste';
import { Usuario } from '../../model/Usuario';
import { buscarUsuarioPeloIdRepository } from '../../repositories/usuarioRepository';

export const pesquisarUsuarioService = async (usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO): Promise<Usuario | null> => {
	const result = await buscarUsuarioPeloIdRepository(usuarioGetDeleteRequestDTO);
	if (result === null) {
		throw UsuarioNaoExiste()
	}
	return result;
};