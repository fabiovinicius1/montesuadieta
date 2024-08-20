import { RefeicaoAlimentoDeleteDto } from "../dto/refeicaoDto/RefeicaoAlimentoDeleteDto";
import { RefeicaoAlimentoPostDto } from "../dto/refeicaoDto/refeicaoAlimentoPostDto";
import { AlimentoApp } from "../model/AlimentoApp";
import { AlimentoRefeicao } from "../model/AlimentoRefeicao";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const adicionarAlimentoRefeicaoRepository = async (refeicaoAlimentoPostDeleteDto: RefeicaoAlimentoPostDto, alimento: AlimentoApp): Promise<AlimentoRefeicao | null> => {
	const { caloria, carboidrato, gordutaTotal, monoinsaturados, poliinsaturados, proteina, saturados, porcao } = alimento
	const nomeAlimentoRefeicao = alimento.nomeAlimentoApp;
	const refeicaoId = refeicaoAlimentoPostDeleteDto.idRefeicao
	const result = await prisma.alimentosRefeicao.create({
		data: {
			caloria,
			carboidrato,
			gordutaTotal,
			monoinsaturados,
			nomeAlimentoRefeicao,
			poliinsaturados,
			porcao,
			proteina,
			saturados,
			refeicaoId
		}
	})
	return result;
};

export const removerAlimentoRefeicaoRepository = async (refeicaoAlimentoDeleteDto: RefeicaoAlimentoDeleteDto): Promise<AlimentoRefeicao | null> => {
	const id = refeicaoAlimentoDeleteDto.id
	const result = await prisma.alimentosRefeicao.delete({
		where: {
			id
		}
	})
	return result;
};

export const pesquisarAlimentoRefeicaoRepository = async (refeicaoAlimentoDeleteDto: RefeicaoAlimentoDeleteDto): Promise<AlimentoRefeicao | null> => {
	const id = refeicaoAlimentoDeleteDto.id
	const result = await prisma.alimentosRefeicao.findFirst({
		where: {
			id
		}
	})
	return result;
};