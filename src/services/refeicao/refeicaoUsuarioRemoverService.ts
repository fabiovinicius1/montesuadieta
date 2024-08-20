import { RefeicaoGetDeleteDto } from '../../dto/refeicaoDto/refeicaoGetDeleteDto';
import { RefeicaoUsuario } from '../../model/RefeicaoUsuario';
import { removerRefeicaoRepository,buscarRefeicaoPeloIdRepository } from '../../repositories/refeicaoRepository';

export const refeicaoUsuarioRemoverService = async (refeicaoGetDeleteDto: RefeicaoGetDeleteDto): Promise<RefeicaoUsuario | null> => {
	const result = await buscarRefeicaoPeloIdRepository(refeicaoGetDeleteDto);
	if (result !== null) {
		return await removerRefeicaoRepository(refeicaoGetDeleteDto)
	}
	else {
		return null;
	}
};