import { UsuarioGetDeleteDto } from '../../dto/usuarioDto/usuarioGetDeleteDto';
import { UsuarioNaoExiste } from '../../error/UsuarioNaoExiste';
import { Usuario } from '../../model/Usuario';
import { buscarUsuarioPeloIdRepository } from '../../repositories/usuarioRepository';

export const pesquisarUsuarioService = async (usuarioGetDeleteDto: UsuarioGetDeleteDto): Promise<Usuario | null> => {
	const result =  await buscarUsuarioPeloIdRepository(usuarioGetDeleteDto);
	if (result === null) {
		throw  UsuarioNaoExiste()
	}
	return result;
};