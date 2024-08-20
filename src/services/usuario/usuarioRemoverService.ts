import { UsuarioGetDeleteDto } from '../../dto/usuarioDto/usuarioGetDeleteDto';
import { Usuario } from '../../model/Usuario';
import { removerPesoUsuarioRepository, buscarUsuarioPeloIdRepository } from '../../repositories/usuarioRepository';


export const usuarioRemoverService = async (usuarioGetDeleteDto: UsuarioGetDeleteDto): Promise<Usuario | null> => {
	const result = await buscarUsuarioPeloIdRepository(usuarioGetDeleteDto);
	if (result !== null) {
		return await removerPesoUsuarioRepository(usuarioGetDeleteDto);
	} else {
		return null;
	}
};
