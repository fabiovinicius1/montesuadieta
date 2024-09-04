import { UsuarioPostPutRequestDTO } from '../../dto/usuarioDto/usuarioPostPutRequestDTO';
import { LoginJaExiste } from '../../error/LoginJaExiste';
import { Usuario } from '../../model/Usuario';
import { adicionarUsuarioRepository, buscarUsuarioPeloLoginRepository } from '../../repositories/usuarioRepository';
import bcrypt from 'bcrypt';

export const adicionarUsuarioService = async (usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO): Promise<Usuario | null> => {
	const result = await buscarUsuarioPeloLoginRepository(usuarioPostPutRequestDTO.login);
	if (result === null) {
		const hashSenha = await bcrypt.hash(usuarioPostPutRequestDTO.senha, 10);
		const usuarioComSenhaHash = {
			...usuarioPostPutRequestDTO,
			senha: hashSenha,
		};
		return await adicionarUsuarioRepository(usuarioComSenhaHash);
	}
	throw LoginJaExiste()
};
