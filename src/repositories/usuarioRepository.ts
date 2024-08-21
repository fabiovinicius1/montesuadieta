import { PrismaClient } from '@prisma/client';
import { Usuario } from '../model/Usuario';
import { UsuarioPostPutDto } from '../dto/usuarioDto/usuarioPostPutDto';
import { UsuarioGetDeleteDto } from '../dto/usuarioDto/usuarioGetDeleteDto';
import { UsuarioPatchPesoDto } from '../dto/usuarioDto/usuarioPatchPesoDto';

const prisma = new PrismaClient();

export const buscarUsuarioPeloIdRepository = async (usuarioGetDeleteDto: UsuarioGetDeleteDto): Promise<Usuario | null> => {
	const { id } = usuarioGetDeleteDto
	const result = await prisma.usuarios.findFirst({
		where: {
			id
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

export const adicionarUsuarioRepository = async (usuarioPostPutDto: UsuarioPostPutDto): Promise<Usuario | null> => {
	const { login, senha, peso } = usuarioPostPutDto;
	const result = await prisma.usuarios.create({
		data: {
			login,
			senha,
			peso
		}
	})
	return result;
};

export const atualizarPesoUsuarioRepository = async (usuarioPatchPesoDto: UsuarioPatchPesoDto): Promise<Usuario | null> => {
	const { id, peso } = usuarioPatchPesoDto;
	const result = await prisma.usuarios.update({
		where: {
			id
		},
		data: {
			peso
		}
	})
	return result;
};

export const removerPesoUsuarioRepository = async (usuarioGetDeleteDto: UsuarioGetDeleteDto): Promise<Usuario | null> => {
	const { id } = usuarioGetDeleteDto
	const result = await prisma.usuarios.delete({
		where: {
			id
		}
	})
	return result;
};
