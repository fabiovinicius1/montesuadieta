import { PrismaClient } from '@prisma/client';
import { Usuario } from '../model/Usuario';
import { UsuarioPostPutDto } from '../dto/usuarioDto/usuarioPostPutDto';
import { UsuarioGetDeleteDto } from '../dto/usuarioDto/usuarioGetDeleteDto';
import { UsuarioPatchPesoDto } from '../dto/usuarioDto/usuarioPatchPesoDto';

const prisma = new PrismaClient();

export const buscarUsuarioPeloLoginRepository = async (usuarioGetDeleteDto: UsuarioGetDeleteDto): Promise<Usuario | null> => {
	const login = usuarioGetDeleteDto.login
  const result = await prisma.usuarios.findFirst({
    where: {
      login,
    },
    include: {
		refeicoes: {
		  include: {
			alimentosRefeicao: true,
		  },
		},
	  },
  });

  return result;
};

export const adicionarUsuarioRepository = async (usuarioPostPutDto: UsuarioPostPutDto): Promise<Usuario | null> => {
	const {login, senha, peso} = usuarioPostPutDto;
	const result = await prisma.usuarios.create({
		data:{
			login,
			senha,
			peso
		}
	})
 return result;
};

export const atualizarPesoUsuarioRepository = async (usuarioPatchPesoDto: UsuarioPatchPesoDto): Promise<Usuario | null> => {
	const login = usuarioPatchPesoDto.login;
	const peso = usuarioPatchPesoDto.peso;
	const result = await prisma.usuarios.update({
		where:{
			login
		},
		data: {
			peso
		}
	})
  return result;
};

export const removerPesoUsuarioRepository = async (usuarioGetDeleteDto: UsuarioGetDeleteDto): Promise<Usuario | null> => {
	const login = usuarioGetDeleteDto.login
	const result = await prisma.usuarios.delete({
		where:{
			login
		}
	})
  return result;
};
