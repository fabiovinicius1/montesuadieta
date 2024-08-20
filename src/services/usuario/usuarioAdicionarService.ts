import { UsuarioPostPutDto } from '../../dto/usuarioDto/usuarioPostPutDto';
import { Usuario } from '../../model/Usuario';
import { adicionarUsuarioRepository } from '../../repositories/usuarioRepository';


export const adicionarUsuarioService = async (usuarioPostPutDto: UsuarioPostPutDto): Promise<Usuario | null> => {
	return await adicionarUsuarioRepository(usuarioPostPutDto);
};
