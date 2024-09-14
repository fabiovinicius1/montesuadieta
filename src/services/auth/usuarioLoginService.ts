import { UsuarioLoginPostRequestDTO } from '../../dto/usuarioDto/usuarioLoginPostRequestDTO';
import { buscarUsuarioPeloLoginRepository } from '../../repositories/usuarioRepository';
import { authError } from '../../error/authError';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET = process.env.SECRET;

export const usuarioLoginService = async (usuarioLoginPostRequestDTO: UsuarioLoginPostRequestDTO): Promise<String> => {
	const usuarioPesquisado = await buscarUsuarioPeloLoginRepository(usuarioLoginPostRequestDTO.login);
	if (usuarioPesquisado === null) {
		throw authError()
	}
	const validacaoSenha = bcrypt.compareSync(usuarioLoginPostRequestDTO.senha, usuarioPesquisado.senha!)
	if (!validacaoSenha) {
		throw authError()
	}
	const payload = {
		login: usuarioLoginPostRequestDTO.login,
		cargo: 'user',
		id: usuarioPesquisado.id
	};
	const token = jwt.sign(payload, SECRET!);
	return token;
};
