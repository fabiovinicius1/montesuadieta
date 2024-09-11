import { AdminGetDeleteRequestDTO } from '../../dto/adminDto/AdminGetDeleteRequestDTO';
import { AdminNaoExiste } from '../../error/AdminNaoExiste';
import { Admin } from '../../model/Admin';
import { buscarAdminPeloIdRepository, removerAdminRepository } from '../../repositories/adminRepository';

export const adminRemoverService = async (adminGetDeleteRequestDTO: AdminGetDeleteRequestDTO): Promise<Admin | null> => {
	const result = await buscarAdminPeloIdRepository(adminGetDeleteRequestDTO);
	if (result === null) {
		throw AdminNaoExiste()
	}
	return await removerAdminRepository(adminGetDeleteRequestDTO);
};
