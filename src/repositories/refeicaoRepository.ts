import { RefeicaoGetDeleteDto } from '../dto/refeicaoDto/refeicaoGetDeleteDto';
import { RefeicaoPatchNomeDto } from '../dto/refeicaoDto/refeicaoPatchNomeDto';
import { RefeicaoPostPutDto } from '../dto/refeicaoDto/refeicaoPostPutDto';
import { RefeicaoUsuario } from '../model/RefeicaoUsuario';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const buscarRefeicaoPeloLoginUsuarioRepository = async (RefeicaoGetDeleteDto: RefeicaoGetDeleteDto): Promise<RefeicaoUsuario | null> => {
	const { nome, usuarioLogin } = RefeicaoGetDeleteDto;
	const result = await prisma.refeicaoUsuario.findFirst({
		where: {
			usuarioLogin,
			nome
		},
		include: {
			alimentosRefeicao: true
		}
	})
	return result;
};

export const adicionarRefeicaoUsuarioRepository = async (refeicaoPostPutDto: RefeicaoPostPutDto): Promise<RefeicaoUsuario | null> => {
	const { nome, usuarioLogin } = refeicaoPostPutDto;
	const result = await prisma.refeicaoUsuario.create({
		data: {
			nome,
			usuarioLogin
		}
	})
	return result;
};

export const atualizarNomeRefeicaoRepository = async (refeicaoPatchNomeDto: RefeicaoPatchNomeDto): Promise<RefeicaoUsuario | null> => {
	const refeicaoGetDeleteDto: RefeicaoGetDeleteDto = { "usuarioLogin": refeicaoPatchNomeDto.usuarioLogin, "nome": refeicaoPatchNomeDto.nome};
	const nome = refeicaoPatchNomeDto.nomeAtualizado;
	const resultBusca = await buscarRefeicaoPeloLoginUsuarioRepository(refeicaoGetDeleteDto);
	const id = resultBusca?.id
	const result = await prisma.refeicaoUsuario.update({
		where: {
			id
		},
		data: {
			nome
		}
	})
	return result;
};

export const removerRefeicaoRepository = async (RefeicaoGetDeleteDto: RefeicaoGetDeleteDto): Promise<RefeicaoUsuario | null> => {
	const resultBusca = await buscarRefeicaoPeloLoginUsuarioRepository(RefeicaoGetDeleteDto);
	const id = resultBusca?.id
	const result = await prisma.refeicaoUsuario.delete({
		where: {
			id
		}
	})
	return result;
};
