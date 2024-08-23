import { RefeicaoGetDeleteDto } from '../../dto/refeicaoDto/refeicaoGetDeleteDto';
import { RefeicaoNaoExiste } from '../../error/RefeicaoNaoExiste';
import { RefeicaoUsuario } from '../../model/RefeicaoUsuario';
import { removerTodosAlimentosRefeicaoRepository } from '../../repositories/alimentoRefeicaoRepository';
import { removerRefeicaoRepository,buscarRefeicaoPeloIdRepository } from '../../repositories/refeicaoRepository';

export const refeicaoUsuarioRemoverService = async (refeicaoGetDeleteDto: RefeicaoGetDeleteDto): Promise<RefeicaoUsuario | null> => {
	const result = await buscarRefeicaoPeloIdRepository(refeicaoGetDeleteDto);
	if (result === null) {
		throw RefeicaoNaoExiste()
	}
	if (result.alimentosRefeicao?.length !== 0) {
		await removerTodosAlimentosRefeicaoRepository(refeicaoGetDeleteDto.id)
	}
	return await removerRefeicaoRepository(refeicaoGetDeleteDto)
};