import { Usuario } from '../model/usuarioModel';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const findUsuarioByLoginRepository = async (login: string): Promise<Usuario | null> => {
	const usuarioFind = await prisma.usuarios.findFirst({
		where:{
			login
		}
	})
  return usuarioFind;
};

export const addUsuarioRepository = async (usuario: Usuario): Promise<Usuario | null> => {
	const {login, senha, peso} = usuario;
	const usuarioCreate = await prisma.usuarios.create({
		data:{
			login,
			senha,
			peso
		}
	})
 return usuarioCreate;
};

export const updatePesoUsuarioRepository = async (login: string, peso: number): Promise<Usuario | null> => {
	const usuarioUpdatePeso = await prisma.usuarios.update({
		where:{
			login
		},
		data: {
			peso
		}
	})
  return usuarioUpdatePeso;
};
