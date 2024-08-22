import { AlimentoAppGetDeleteDto } from '../../dto/alimentoAppDto/alimentoAppGetDeleteDto';
import { AlimentoNaoEncontrado } from '../../error/AlimentoNaoEncontrado';
import { AlimentoApp } from '../../model/AlimentoApp';
import { pesquisaAlimentoAppPeloIdRepository,removerAlimentoAppPeloIdRepository } from '../../repositories/alimetoAppRepository';

export const alimentoAppRemoverService = async (alimentoAppGetDeleteDto: AlimentoAppGetDeleteDto): Promise<AlimentoApp | null> => {
	const result =  await pesquisaAlimentoAppPeloIdRepository(alimentoAppGetDeleteDto.id);
	if (result === null) {
		throw AlimentoNaoEncontrado()
	}
	return await removerAlimentoAppPeloIdRepository(alimentoAppGetDeleteDto.id);
};