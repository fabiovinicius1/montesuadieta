import { UsuarioPesoPatchRequestDTO } from '../../dto/usuarioDto/usuarioPesoPatchRequestDTO';
import { UsuarioNaoExiste } from '../../error/UsuarioNaoExiste';
import { Usuario } from '../../model/Usuario';
import { atualizarPesoUsuarioRepository, buscarUsuarioPeloIdRepository } from '../../repositories/usuarioRepository';

export const atualizarPesoUsuarioService = async (usuarioPesoPatchDTO: UsuarioPesoPatchRequestDTO): Promise<Usuario | null> => {
	const result = await buscarUsuarioPeloIdRepository(usuarioPesoPatchDTO.id);
	if (result === null) {
		throw UsuarioNaoExiste()
	}
	return await atualizarPesoUsuarioRepository(usuarioPesoPatchDTO);
};
