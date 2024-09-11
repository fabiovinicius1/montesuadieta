import { AdminGetDeleteRequestDTO } from '../../dto/adminDto/AdminGetDeleteRequestDTO';
import { AdminNaoExiste } from '../../error/AdminNaoExiste';
import { Usuario } from '../../model/Usuario';
import { buscarAdminPeloIdRepository } from '../../repositories/adminRepository';

export const pesquisarAdminService = async (adminGetDeleteRequestDTO: AdminGetDeleteRequestDTO): Promise<Usuario | null> => {
	const result = await buscarAdminPeloIdRepository(adminGetDeleteRequestDTO);
	if (result === null) {
		throw AdminNaoExiste()
	}
	return result;
};