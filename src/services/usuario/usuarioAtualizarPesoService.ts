import { UsuarioPatchPesoDto } from '../../dto/usuarioDto/usuarioPatchPesoDto';
import { Usuario } from '../../model/Usuario';
import { atualizarPesoUsuarioRepository, buscarUsuarioPeloLoginRepository } from '../../repositories/usuarioRepository';


export const atualizarPesoUsuarioService = async (usuarioPatchPesoDto: UsuarioPatchPesoDto): Promise<Usuario | null> => {
	const result = await buscarUsuarioPeloLoginRepository(usuarioPatchPesoDto);
	if (result !== null) {
		return await atualizarPesoUsuarioRepository(usuarioPatchPesoDto);
	} else {
		return null;
	}
};
