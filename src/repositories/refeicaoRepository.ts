import { RefeicaoGetDeleteDto } from '../dto/refeicaoDto/refeicaoGetDeleteDto';
import { RefeicaoPatchNomeDto } from '../dto/refeicaoDto/refeicaoPatchNomeDto';
import { RefeicaoPostPutDto } from '../dto/refeicaoDto/refeicaoPostPutDto';
import { RefeicaoUsuario } from '../model/RefeicaoUsuario';
import { prisma } from '../database/prismaClient';

export const buscarRefeicaoPeloIdRepository = async (RefeicaoGetDeleteDto: RefeicaoGetDeleteDto): Promise<RefeicaoUsuario | null> => {
	const { id } = RefeicaoGetDeleteDto;
	const result = await prisma.refeicaoUsuario.findFirst({
		where: {
			id
		},
		include:{
			alimentosRefeicao:true
		}
	})
	return result;
};
export const buscarTodasRefeicaoPeloRepository = async (usuarioId: number): Promise<RefeicaoUsuario[] | null> => {
	const result = await prisma.refeicaoUsuario.findMany({
		where: {
			usuarioId
		},
		include:{
			alimentosRefeicao:true
		}
	})
	return result;
};

export const buscarRefeicaoUsusarioRepository = async (usuarioId: number, nomeRefeicao: string): Promise<RefeicaoUsuario | null> => {
	const result = await prisma.refeicaoUsuario.findFirst({
		where: {
			usuarioId,
			nomeRefeicao: nomeRefeicao
		}
	})
	return result;
};

export const adicionarRefeicaoUsuarioRepository = async (refeicaoPostPutDto: RefeicaoPostPutDto): Promise<RefeicaoUsuario | null> => {
	const { nomeRefeicao, usuarioId } = refeicaoPostPutDto;
	const result = await prisma.refeicaoUsuario.create({
		data: {
			nomeRefeicao,
			usuarioId
		}
	})
	return result;
};

export const atualizarNomeRefeicaoRepository = async (refeicaoPatchNomeDto: RefeicaoPatchNomeDto): Promise<RefeicaoUsuario | null> => {
	const { id, nomeRefeicao } = refeicaoPatchNomeDto
	const result = await prisma.refeicaoUsuario.update({
		where: {
			id
		},
		data: {
			nomeRefeicao
		}
	})
	return result;
};

export const removerRefeicaoRepository = async (refeicaoGetDeleteDto: RefeicaoGetDeleteDto): Promise<RefeicaoUsuario | null> => {
	const { id } = refeicaoGetDeleteDto
	const result = await prisma.refeicaoUsuario.delete({
		where: {
			id
		}
	})
	return result;
};
