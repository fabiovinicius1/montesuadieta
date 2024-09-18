import { RefeicaoAlimentoPostDto } from "../dto/refeicaoDto/refeicaoAlimentoPostDto";
import { AlimentoApp } from "../model/AlimentoApp";
import { AlimentoRefeicao } from "../model/AlimentoRefeicao";
import { prisma } from '../database/prismaClient';
import { RefeicaoAlimentoGetDeleteDto } from "../dto/refeicaoDto/RefeicaoAlimentoGetDeleteDto";

export const adicionarAlimentoRefeicaoRepository = async (refeicaoAlimentoPostDeleteDto: RefeicaoAlimentoPostDto, alimento: AlimentoApp): Promise<AlimentoRefeicao | null> => {
	const { caloria, carboidrato, gordutaTotal, monoinsaturados, poliinsaturados, proteina, saturados, porcao, nomeAlimentoApp } = alimento
	const { idRefeicao, quantidade } = refeicaoAlimentoPostDeleteDto
	const result = await prisma.alimentosRefeicao.create({
		data: {
			caloria,
			carboidrato,
			gordutaTotal,
			monoinsaturados,
			nomeAlimentoRefeicao: nomeAlimentoApp,
			poliinsaturados,
			porcao,
			proteina,
			saturados,
			refeicaoId: idRefeicao,
			quantidade
		}
	})
	return result;
};

export const removerAlimentoRefeicaoRepository = async (refeicaoAlimentoGetDeleteDto: RefeicaoAlimentoGetDeleteDto): Promise<AlimentoRefeicao | null> => {
	const id = refeicaoAlimentoGetDeleteDto.id
	const result = await prisma.alimentosRefeicao.delete({
		where: {
			id
		}
	})
	return result;
};

export const pesquisarAlimentoRefeicaoRepository = async (refeicaoAlimentoGetDeleteDto: RefeicaoAlimentoGetDeleteDto): Promise<AlimentoRefeicao | null> => {
	const id = refeicaoAlimentoGetDeleteDto.id
	const result = await prisma.alimentosRefeicao.findFirst({
		where: {
			id
		}
	})
	return result;
};