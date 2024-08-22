import { AlimentoAppGetDeleteDto } from '../../dto/alimentoAppDto/alimentoAppGetDeleteDto';
import { AlimentoNaoEncontrado } from '../../error/AlimentoNaoEncontrado';
import { AlimentoApp } from '../../model/AlimentoApp';
import { pesquisaAlimentoAppPeloIdRepository } from '../../repositories/alimetoAppRepository';

export const alimentoAppPesquisarService = async (alimentoAppGetDeleteDto: AlimentoAppGetDeleteDto): Promise<AlimentoApp | null> => {
	const result =  await pesquisaAlimentoAppPeloIdRepository(alimentoAppGetDeleteDto.id);
	if (result === null) {
		throw AlimentoNaoEncontrado()
	}
	return result;
};