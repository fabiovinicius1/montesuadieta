import { RefeicaoGetDeleteDto } from '../dto/refeicaoDto/refeicaoGetDeleteDto';
import { RefeicaoPatchNomeDto } from '../dto/refeicaoDto/refeicaoPatchNomeDto';
import { RefeicaoPostPutDto } from '../dto/refeicaoDto/refeicaoPostPutDto';
import { RefeicaoUsuario } from '../model/RefeicaoUsuario';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const buscarRefeicaoPeloIdRepository = async (RefeicaoGetDeleteDto: RefeicaoGetDeleteDto): Promise<RefeicaoUsuario | null> => {
	const { id } = RefeicaoGetDeleteDto;
	const result = await prisma.refeicaoUsuario.findFirst({
		where: {
			id
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
	const resultBusca = await buscarRefeicaoPeloIdRepository(refeicaoPatchNomeDto);
	const { nomeRefeicao } = refeicaoPatchNomeDto
	const id = resultBusca?.id
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

export const removerRefeicaoRepository = async (RefeicaoGetDeleteDto: RefeicaoGetDeleteDto): Promise<RefeicaoUsuario | null> => {
	const resultBusca = await buscarRefeicaoPeloIdRepository(RefeicaoGetDeleteDto);
	const id = resultBusca?.id
	const result = await prisma.refeicaoUsuario.delete({
		where: {
			id
		}
	})
	return result;
};
