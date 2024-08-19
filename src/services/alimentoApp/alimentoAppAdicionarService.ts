import { AlimentoAppPostPutDto } from '../../dto/alimentoAppDto/alimentoAppPostPutDto';
import { AlimentoApp } from '../../model/AlimentoApp';
import { addAlimentoAppRepository } from '../../repositories/alimetoAppRepository';

export const alimentoAppAdicionarService = async (alimentoAppPostPutDto: AlimentoAppPostPutDto): Promise<AlimentoApp | null> => {
	return await addAlimentoAppRepository(alimentoAppPostPutDto);
};