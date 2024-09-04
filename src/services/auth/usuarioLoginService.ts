import { UsuarioLoginPostRequestDTO } from '../../dto/usuarioDto/usuarioLoginPostRequestDTO';
import { buscarUsuarioPeloLoginRepository } from '../../repositories/usuarioRepository';
import { authErrorUsuario } from '../../error/authErrorUsuario';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET = process.env.SECRET;

export const usuarioLoginService = async (usuarioLoginPostRequestDTO: UsuarioLoginPostRequestDTO): Promise<String> => {
	const usuarioPesquisado = await buscarUsuarioPeloLoginRepository(usuarioLoginPostRequestDTO.login);
	if (usuarioPesquisado === null) {
		throw authErrorUsuario()
	}
	const validacaoSenha = bcrypt.compareSync(usuarioLoginPostRequestDTO.senha, usuarioPesquisado.senha!)
	if (!validacaoSenha) {
		throw authErrorUsuario()
	}
	const token = jwt.sign(usuarioLoginPostRequestDTO.login, SECRET!);
	return token;
};
