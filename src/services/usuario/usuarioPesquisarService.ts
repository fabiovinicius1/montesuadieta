import { UsuarioGetDeleteDto } from '../../dto/usuarioDto/usuarioGetDeleteDto';
import { Usuario } from '../../model/Usuario';
import { buscarUsuarioPeloIdRepository } from '../../repositories/usuarioRepository';

export const pesquisarUsuarioService = async (usuarioGetDeleteDto: UsuarioGetDeleteDto): Promise<Usuario | null> => {
	return await buscarUsuarioPeloIdRepository(usuarioGetDeleteDto);
};