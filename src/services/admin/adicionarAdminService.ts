import { AdminPostPutRequestDTO } from '../../dto/adminDto/AdminPostPutRequestDTO';
import { LoginJaExiste } from '../../error/LoginJaExiste';
import { Usuario } from '../../model/Usuario';
import { adicionarAdminRepository, buscarAdminPeloLoginRepository } from '../../repositories/adminRepository';
import bcrypt from 'bcrypt';

export const adicionarAdminService = async (adminPostPutRequestDTO: AdminPostPutRequestDTO): Promise<Usuario | null> => {
	const result = await buscarAdminPeloLoginRepository(adminPostPutRequestDTO.login);
	if (result === null) {
		const hashSenha = await bcrypt.hash(adminPostPutRequestDTO.senha, 10);
		const adminComSenhaHash = {
			...adminPostPutRequestDTO,
			senha: hashSenha,
		};
		return await adicionarAdminRepository(adminComSenhaHash);
	}
	throw LoginJaExiste()
};
