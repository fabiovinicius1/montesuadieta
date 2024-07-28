import { PrismaClient } from '@prisma/client';
import { Alimento } from "../model/alimentoModel";

const prisma = new PrismaClient();

export const addAlimentoRepository = async (alimento: Alimento): Promise<Alimento | null> => {
	const {nome, caloria,proteina,carboidrato,saturados,monoinsaturados,poliinsaturados,gordutaTotal} = alimento;
	const alimentoCreate = await prisma.alimentosTabelaApp.create({
		data:{
			nome,
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