import { Admin } from '../model/Admin';
import { AdminPostPutRequestDTO } from '../dto/adminDto/AdminPostPutRequestDTO';
import { AdminGetDeleteRequestDTO } from '../dto/adminDto/AdminGetDeleteRequestDTO';
import { prisma } from '../database/prismaClient';


export const buscarAdminPeloIdRepository = async (adminGetDeleteRequestDTO: AdminGetDeleteRequestDTO): Promise<Admin | null> => {
	const { id } = adminGetDeleteRequestDTO;
	const result = await prisma.admin.findFirst({
		where: {
			id
		},
		select: {
			id: true,
			login: true,
		}
	});

	return result;
};

export const buscarAdminPeloLoginRepository = async (login: string): Promise<Admin | null> => {
	const result = await prisma.admin.findFirst({
		where: {
			login
		}
	});

	return result;
};

export const adicionarAdminRepository = async (adminPostPutRequestDTO: AdminPostPutRequestDTO): Promise<Admin | null> => {
	const result = await prisma.admin.create({
		data: {
			...adminPostPutRequestDTO
		},
		select: {
			id: true,
			login: true,
		}
	})
	return result;
};

export const removerAdminRepository = async (adminGetDeleteRequestDTO: AdminGetDeleteRequestDTO): Promise<Admin | null> => {
	const { id } = adminGetDeleteRequestDTO;
	const result = await prisma.admin.delete({
		where: {
			id
		}
	})
	return result;
};
