import { RefeicaoPatchNomeDto } from '../../dto/refeicaoDto/refeicaoPatchNomeDto';
import { RefeicaoUsuario } from '../../model/RefeicaoUsuario';
import { atualizarNomeRefeicaoRepository, buscarRefeicaoPeloIdRepository } from '../../repositories/refeicaoRepository';


export const atualizarNomeRefeicaoUsuarioService = async (refeicaoPatchNomeDto: RefeicaoPatchNomeDto): Promise< RefeicaoUsuario| null> => {
	const result = await buscarRefeicaoPeloIdRepository(refeicaoPatchNomeDto);
	if (result !== null) {
		return await atualizarNomeRefeicaoRepository(refeicaoPatchNomeDto);
	} else {
		return null;
	}
};
