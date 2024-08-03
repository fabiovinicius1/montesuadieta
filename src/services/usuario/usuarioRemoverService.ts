import { UsuarioGetDeleteDto } from '../../dto/usuarioDto/usuarioGetDeleteDto';
import { Usuario } from '../../model/Usuario';
import { removerPesoUsuarioRepository, buscarUsuarioPeloLoginRepository } from '../../repositories/usuarioRepository';


export const usuarioRemoverService = async (usuarioGetDeleteDto: UsuarioGetDeleteDto): Promise<Usuario | null> => {
	const result = await buscarUsuarioPeloLoginRepository(usuarioGetDeleteDto);
	if (result !== null) {
		return await removerPesoUsuarioRepository(usuarioGetDeleteDto);
	} else {
		return null;
	}
};
