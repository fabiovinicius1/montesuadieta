import { RefeicaoPatchNomeDto } from '../../dto/refeicaoDto/refeicaoPatchNomeDto';
import { RefeicaoNaoExiste } from '../../error/RefeicaoNaoExiste';
import { RefeicaoUsuario } from '../../model/RefeicaoUsuario';
import { atualizarNomeRefeicaoRepository, buscarRefeicaoPeloIdRepository } from '../../repositories/refeicaoRepository';


export const atualizarNomeRefeicaoUsuarioService = async (refeicaoPatchNomeDto: RefeicaoPatchNomeDto): Promise< RefeicaoUsuario| null> => {
	const result = await buscarRefeicaoPeloIdRepository(refeicaoPatchNomeDto);
	if (result === null) {
		throw RefeicaoNaoExiste()
	} 
	return await atualizarNomeRefeicaoRepository(refeicaoPatchNomeDto);
};
