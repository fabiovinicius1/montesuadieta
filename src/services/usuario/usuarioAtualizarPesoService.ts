import { UsuarioPatchPesoDto } from '../../dto/usuarioDto/usuarioPatchPesoDto';
import { Usuario } from '../../model/Usuario';
import { atualizarPesoUsuarioRepository, buscarUsuarioPeloIdRepository } from '../../repositories/usuarioRepository';


export const atualizarPesoUsuarioService = async (usuarioPatchPesoDto: UsuarioPatchPesoDto): Promise<Usuario | null> => {
	const result = await buscarUsuarioPeloIdRepository(usuarioPatchPesoDto);
	if (result !== null) {
		return await atualizarPesoUsuarioRepository(usuarioPatchPesoDto);
	} else {
		return null;
	}
};
