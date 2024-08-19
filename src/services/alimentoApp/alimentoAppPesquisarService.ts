import { AlimentoAppGetDeleteDto } from '../../dto/alimentoAppDto/alimentoAppGetDeleteDto';
import { AlimentoApp } from '../../model/AlimentoApp';
import { pesquisaAlimentoAppPeloIdRepository } from '../../repositories/alimetoAppRepository';

export const alimentoAppPesquisarService = async (alimentoAppGetDeleteDto: AlimentoAppGetDeleteDto): Promise<AlimentoApp | null> => {
	return await pesquisaAlimentoAppPeloIdRepository(alimentoAppGetDeleteDto.id);
};