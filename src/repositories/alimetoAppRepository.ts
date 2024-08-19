import { PrismaClient } from '@prisma/client';
import { AlimentoApp } from '../model/AlimentoApp';
import { AlimentoAppPostPutDto } from '../dto/alimentoAppDto/alimentoAppPostPutDto';

const prisma = new PrismaClient();

export const addAlimentoAppRepository = async (alimentoAppPostPutDto: AlimentoAppPostPutDto): Promise<AlimentoApp | null> => {
	const { nomeAlimentoApp, caloria, proteina, carboidrato, saturados, monoinsaturados, poliinsaturados, gordutaTotal } = alimentoAppPostPutDto;
	const alimentoCreate = await prisma.alimentosTabelaApp.create({
		data: {
			nomeAlimentoApp,
			caloria,
			proteina,
			carboidrato,
			saturados,
			monoinsaturados,
			poliinsaturados,
			gordutaTotal
		}
	})
	return alimentoCreate;
};

export const pesquisaAlimentoAppPeloIdRepository = async (id: number): Promise<AlimentoApp | null> => {
	const result = await prisma.alimentosTabelaApp.findUnique({
		where: {
			id
		}
	})
	return result;
};

export const removerAlimentoAppPeloIdRepository = async (id: number): Promise<AlimentoApp | null> => {
	const result = await prisma.alimentosTabelaApp.delete({
		where: {
			id
		}
	})
	return result;
};
