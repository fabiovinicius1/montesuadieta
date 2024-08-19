import { RefeicaoGetDeleteDto } from '../../dto/refeicaoDto/refeicaoGetDeleteDto';
import { UsuarioGetDeleteDto } from '../../dto/usuarioDto/usuarioGetDeleteDto';
import { RefeicaoUsuario } from '../../model/RefeicaoUsuario';
import { removerRefeicaoRepository,buscarRefeicaoPeloIdRepository } from '../../repositories/refeicaoRepository';
import { buscarUsuarioPeloLoginRepository } from '../../repositories/usuarioRepository';

export const refeicaoUsuarioRemoverService = async (refeicaoGetDeleteDto: RefeicaoGetDeleteDto): Promise<RefeicaoUsuario | null> => {
	const result = await buscarRefeicaoPeloIdRepository(refeicaoGetDeleteDto);
	if (result !== null) {
		return await removerRefeicaoRepository(refeicaoGetDeleteDto)
	}
	else {
		return null;
	}
};