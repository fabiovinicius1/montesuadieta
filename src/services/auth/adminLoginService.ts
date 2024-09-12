import { authError } from '../../error/authError';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AdminPostPutRequestDTO } from '../../dto/adminDto/AdminPostPutRequestDTO';
import { buscarAdminPeloLoginRepository } from '../../repositories/adminRepository';

const SECRET = process.env.SECRET;

export const adminLoginService = async (adminPostPutRequestDTO: AdminPostPutRequestDTO): Promise<String> => {
	const usuarioPesquisado = await buscarAdminPeloLoginRepository(adminPostPutRequestDTO.login);
	if (usuarioPesquisado === null) {
		throw authError()
	}
	const validacaoSenha = bcrypt.compareSync(adminPostPutRequestDTO.senha, usuarioPesquisado.senha!)
	if (!validacaoSenha) {
		throw authError()
	}
	const token = jwt.sign(adminPostPutRequestDTO.login, SECRET!);
	return token;
};
