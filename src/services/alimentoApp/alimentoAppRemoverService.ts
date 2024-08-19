import { AlimentoAppGetDeleteDto } from '../../dto/alimentoAppDto/alimentoAppGetDeleteDto';
import { AlimentoApp } from '../../model/AlimentoApp';
import { pesquisaAlimentoAppPeloIdRepository,removerAlimentoAppPeloIdRepository } from '../../repositories/alimetoAppRepository';

export const alimentoAppRemoverService = async (alimentoAppGetDeleteDto: AlimentoAppGetDeleteDto): Promise<AlimentoApp | null> => {
	const result =  await pesquisaAlimentoAppPeloIdRepository(alimentoAppGetDeleteDto.id);
	if (result !== null) {
		return await removerAlimentoAppPeloIdRepository(alimentoAppGetDeleteDto.id);
	}
	return null;
};