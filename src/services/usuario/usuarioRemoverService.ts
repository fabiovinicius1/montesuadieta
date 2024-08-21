import { UsuarioGetDeleteRequestDTO } from '../../dto/usuarioDto/usuarioGetDeleteRequestDTO';
import { UsuarioNaoExiste } from '../../error/UsuarioNaoExiste';
import { Usuario } from '../../model/Usuario';
import { removerPesoUsuarioRepository, buscarUsuarioPeloIdRepository } from '../../repositories/usuarioRepository';

export const usuarioRemoverService = async (usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO): Promise<Usuario | null> => {
	const result = await buscarUsuarioPeloIdRepository(usuarioGetDeleteRequestDTO);
	if (result === null) {
		throw UsuarioNaoExiste
	}
	return await removerPesoUsuarioRepository(usuarioGetDeleteRequestDTO);
};
