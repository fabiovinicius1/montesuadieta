import { RefeicaoNaoExiste } from '../../error/RefeicaoNaoExiste';
import { RefeicaoUsuario } from '../../model/RefeicaoUsuario';
import { buscarTodasRefeicaoPeloRepository } from '../../repositories/refeicaoRepository';

export const refeicaoUsuarioPesquisarTodasService = async (usuarioId: number): Promise<RefeicaoUsuario[] | null> => {
	const result = await buscarTodasRefeicaoPeloRepository(usuarioId);
	if (result === null) {
		throw RefeicaoNaoExiste()
	}
	return result;
};