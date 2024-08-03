import { UsuarioPostPutDto } from '../../dto/usuarioDto/usuarioPostPutDto';
import { Usuario } from '../../model/Usuario';
import { adicionarUsuarioRepository, buscarUsuarioPeloLoginRepository } from '../../repositories/usuarioRepository';


export const adicionarUsuarioService = async (usuarioPostPutDto: UsuarioPostPutDto): Promise<Usuario | null> => {
	const result = await buscarUsuarioPeloLoginRepository(usuarioPostPutDto);
	if (result === null) {
		return await adicionarUsuarioRepository(usuarioPostPutDto);
	} else {
		return null;
	}
};
