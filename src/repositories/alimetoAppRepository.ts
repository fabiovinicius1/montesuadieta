import { prisma } from '../database/prismaClient';
import { AlimentoApp } from '../model/AlimentoApp';
import { AlimentoAppPostPutDto } from '../dto/alimentoAppDto/alimentoAppPostPutDto';


export const addAlimentoAppRepository = async (alimentoAppPostPutDto: AlimentoAppPostPutDto): Promise<AlimentoApp | null> => {
	const { nomeAlimentoApp, caloria, proteina, carboidrato, saturados, monoinsaturados, poliinsaturados, gordutaTotal, porcao } = alimentoAppPostPutDto;
	const alimentoCreate = await prisma.alimentosTabelaApp.create({
		data: {
			nomeAlimentoApp,
			caloria,
			proteina,
			carboidrato,
			saturados,
			monoinsaturados,
			poliinsaturados,
			gordutaTotal,
			porcao
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

export const pesquisaAlimentoAppPeloNomeRepository = async (nomeAlimentoApp: string): Promise<AlimentoApp[]> => {
	const results = await prisma.alimentosTabelaApp.findMany({
		where: {
			nomeAlimentoApp: {
				contains: nomeAlimentoApp,
				mode: 'insensitive'
			}
		}
	});
	return results;
};


export const removerAlimentoAppPeloIdRepository = async (id: number): Promise<AlimentoApp | null> => {
	const result = await prisma.alimentosTabelaApp.delete({
		where: {
			id
		}
	})
	return result;
};
