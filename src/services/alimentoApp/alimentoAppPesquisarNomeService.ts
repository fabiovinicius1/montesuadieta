import { AlimentoAppGetDto } from '../../dto/alimentoAppDto/alimentoAppGetDto';
import { AlimentoNaoEncontrado } from '../../error/AlimentoNaoEncontrado';
import { AlimentoApp } from '../../model/AlimentoApp';
import { pesquisaAlimentoAppPeloNomeRepository } from '../../repositories/alimetoAppRepository';

export const alimentoAppPesquisarNomeService = async (alimentoAppGetDto: AlimentoAppGetDto): Promise<AlimentoApp[] | null> => {
	const result = await pesquisaAlimentoAppPeloNomeRepository(alimentoAppGetDto.nomeAlimentoApp);
	if (result === null) {
		throw AlimentoNaoEncontrado()
	}
	return result;
};