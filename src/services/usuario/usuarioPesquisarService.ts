import { UsuarioGetDeleteDto } from '../../dto/usuarioDto/usuarioGetDeleteDto';
import { Usuario } from '../../model/Usuario';
import { buscarUsuarioPeloLoginRepository } from '../../repositories/usuarioRepository';

export const pesquisarUsuarioService = async (usuarioGetDeleteDto: UsuarioGetDeleteDto): Promise<Usuario | null> => {
	return await buscarUsuarioPeloLoginRepository(usuarioGetDeleteDto);
};