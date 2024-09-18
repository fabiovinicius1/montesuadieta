import { RefeicaoAlimentoPostDto } from "../dto/refeicaoDto/refeicaoAlimentoPostDto";
import { AlimentoApp } from "../model/AlimentoApp";
import { AlimentoRefeicao } from "../model/AlimentoRefeicao";
import { prisma } from '../database/prismaClient';
import { RefeicaoAlimentoGetDeleteDto } from "../dto/refeicaoDto/RefeicaoAlimentoGetDeleteDto";
import { RefeicaoAlimentoPatchQuantidadeDto } from "../dto/refeicaoDto/refeicaoAlimentoPatchQuantidade";

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

export const atualizarQuantidadeAlimentoRefeicaoRepository = async (refeicaoAlimentoPatchQuantidadeDto: RefeicaoAlimentoPatchQuantidadeDto): Promise<AlimentoRefeicao | null> => {
	const { id, quantidade } = refeicaoAlimentoPatchQuantidadeDto;
	const result = await prisma.alimentosRefeicao.update({
		where: {
			id
		},
		data: {
			quantidade
		}
	})
	return result;
};