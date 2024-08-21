import { UsuarioPatchPesoDto } from '../../dto/usuarioDto/usuarioPatchPesoDto';
import { UsuarioNaoExiste } from '../../error/UsuarioNaoExiste';
import { Usuario } from '../../model/Usuario';
import { atualizarPesoUsuarioRepository, buscarUsuarioPeloIdRepository } from '../../repositories/usuarioRepository';

export const atualizarPesoUsuarioService = async (usuarioPatchPesoDto: UsuarioPatchPesoDto): Promise<Usuario | null> => {
	const result = await buscarUsuarioPeloIdRepository(usuarioPatchPesoDto);
	if (result === null) {
		throw UsuarioNaoExiste
	}
	return await atualizarPesoUsuarioRepository(usuarioPatchPesoDto);
};
