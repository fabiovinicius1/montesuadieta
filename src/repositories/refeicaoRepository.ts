import { RefeicaoDeleteDto } from '../dto/refeicaoDto/refeicaoDeleteDto';
import { RefeicaoGetDto } from '../dto/refeicaoDto/refeicaoGetDto';
import { RefeicaoPatchNomeDto } from '../dto/refeicaoDto/refeicaoPatchNomeDto';
import { RefeicaoPostPutDto } from '../dto/refeicaoDto/refeicaoPostPutDto';
import { RefeicaoUsuario } from '../model/RefeicaoUsuario';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const buscarRefeicaoPeloLoginUsuarioRepository = async (refeicaoGetDto: RefeicaoGetDto): Promise<RefeicaoUsuario | null> => {
	const usuarioLogin = refeicaoGetDto.usuarioLogin;
	const result = await prisma.refeicaoUsuario.findFirst({
		where: {
			usuarioLogin
		},
		include: {
			alimentosRefeicao: true
		}
	})
	return result;
};

export const adicionarRefeicaoUsuarioRepository = async (refeicaoPostPutDto: RefeicaoPostPutDto): Promise<RefeicaoUsuario | null> => {
	const { nome, usuarioLogin } = refeicaoPostPutDto;
	const result = await prisma.refeicaoUsuario.create({
		data: {
			nome,
			usuarioLogin
		}
	})
	return result;
};

export const atualizarNomeRefeicaoRepository = async (refeicaoPatchNomeDto: RefeicaoPatchNomeDto): Promise<RefeicaoUsuario | null> => {
	const { nome } = refeicaoPatchNomeDto;
	const resultBusca = await buscarRefeicaoPeloLoginUsuarioRepository(refeicaoPatchNomeDto);
	const id = resultBusca?.id
	const result = await prisma.refeicaoUsuario.update({
		where: {
			id
		},
		data: {
			nome
		}
	})
	return result;
};

export const removerRefeicaoRepository = async (refeicaoDeleteDto: RefeicaoDeleteDto): Promise<RefeicaoUsuario | null> => {
	const resultBusca = await buscarRefeicaoPeloLoginUsuarioRepository(refeicaoDeleteDto);
	const id = resultBusca?.id
	const result = await prisma.refeicaoUsuario.delete({
		where: {
			id
		}
	})
	return result;
};
