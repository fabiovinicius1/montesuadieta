import { Usuario } from '../model/Usuario';
import { UsuarioPostPutRequestDTO } from '../dto/usuarioDto/usuarioPostPutRequestDTO';
import { UsuarioGetDeleteRequestDTO } from '../dto/usuarioDto/usuarioGetDeleteRequestDTO';
import { UsuarioPesoPatchRequestDTO } from '../dto/usuarioDto/usuarioPesoPatchRequestDTO';
import { prisma } from '../database/prismaClient';

export const buscarUsuarioPeloIdRepository = async (id: number): Promise<Usuario | null> => {
	const result = await prisma.usuarios.findFirst({
		where: {
			id
		},
		select:{
			id: true,
			login: true,
			peso: true
		}
	});

	return result;
};

export const buscarUsuarioPeloLoginRepository = async (login: string): Promise<Usuario | null> => {
	const result = await prisma.usuarios.findFirst({
		where: {
			login
		}
	});

	return result;
};

export const adicionarUsuarioRepository = async (usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO): Promise<Usuario | null> => {
	const { login, senha, peso } = usuarioPostPutRequestDTO;
	const result = await prisma.usuarios.create({
		data: {
			login,
			senha,
			peso
		},
		select:{
			id: true,
			login: true,
			peso: true
		}
	})
	return result;
};

export const atualizarPesoUsuarioRepository = async (usuarioPesoPatchDTO: UsuarioPesoPatchRequestDTO): Promise<Usuario | null> => {
	const { id, peso } = usuarioPesoPatchDTO;
	const result = await prisma.usuarios.update({
		where: {
			id
		},
		data: {
			peso
		},
		select:{
			id: true,
			login: true,
			peso: true
		}
	})
	return result;
};

export const removerPesoUsuarioRepository = async (usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO): Promise<Usuario | null> => {
	const { id } = usuarioGetDeleteRequestDTO
	const result = await prisma.usuarios.delete({
		where: {
			id
		}
	})
	return result;
};
