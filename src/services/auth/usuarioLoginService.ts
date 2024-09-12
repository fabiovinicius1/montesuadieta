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
	const token = jwt.sign(usuarioLoginPostRequestDTO.login, SECRET!);
	return token;
};
