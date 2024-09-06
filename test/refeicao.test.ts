import express from 'express';
import request from 'supertest';
import { UsuarioGetDeleteRequestDTO } from '../src/dto/usuarioDto/usuarioGetDeleteRequestDTO';
import { UsuarioPostPutRequestDTO } from '../src/dto/usuarioDto/usuarioPostPutRequestDTO';
import { PrismaClient } from '@prisma/client';
import { UsuarioPesoPatchRequestDTO } from '../src/dto/usuarioDto/usuarioPesoPatchRequestDTO';
import { AlimentoAppPostPutDto } from '../src/dto/alimentoAppDto/alimentoAppPostPutDto';
import { AlimentoAppGetDeleteDto } from '../src/dto/alimentoAppDto/alimentoAppGetDeleteDto';
import { RefeicaoGetDeleteDto } from '../src/dto/refeicaoDto/refeicaoGetDeleteDto';
import { RefeicaoPostPutDto } from '../src/dto/refeicaoDto/refeicaoPostPutDto';
import { RefeicaoPatchNomeDto } from '../src/dto/refeicaoDto/refeicaoPatchNomeDto';
import { RefeicaoAlimentoPostDto } from '../src/dto/refeicaoDto/refeicaoAlimentoPostDto';
import { RefeicaoAlimentoDeleteDto } from '../src/dto/refeicaoDto/RefeicaoAlimentoDeleteDto';
import alimentoAppController from '../src/controllers/alimentoAppController';
import authController from '../src/controllers/authController';
import refeicaoController from '../src/controllers/refeicaoController';
import usuarioController from '../src/controllers/usuarioController';

const app = express();
app.use(express.json());
app.use('/usuarios', usuarioController);
app.use('/alimentosApp', alimentoAppController);
app.use('/refeicoes', refeicaoController);
app.use('/auth', authController);
const server = app.listen(process.env.PORT, () => {
	console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
	console.log(`url = env(${process.env.DATABASE_URL})`)
});

const prisma = new PrismaClient();

beforeAll(async () => {
	prisma.$connect();
});

beforeEach(async () => {
	await prisma.$executeRaw`DELETE FROM usuarios;`
	await prisma.$executeRaw`DELETE FROM alimentosTabelaApp;`
	await prisma.$executeRaw`DELETE FROM refeicaoUsuario;`
	await prisma.$executeRaw`DELETE FROM alimentosRefeicao;`
	await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='alimentosTabelaApp';`
	await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='usuarios';`
	await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='refeicaoUsuario';`
	await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='alimentosRefeicao';`
	const alimentoAppPostPutDto: AlimentoAppPostPutDto = {
		"porcao": 100,
		"nomeAlimentoApp": "arroz",
		"caloria": 123.5348925,
		"proteina": 2.58825,
		"carboidrato": 25.80975,
		"saturados": 0.3,
		"monoinsaturados": 0.4,
		"poliinsaturados": 0.3,
		"gordutaTotal": 1
	};
	await prisma.alimentosTabelaApp.create({
		data: {
			...alimentoAppPostPutDto
		}
	});
	const usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO = {
		'login': 'vinicius',
		'peso': 50,
		'senha': "456"
	}
	await prisma.usuarios.create({
		data: {
			...usuarioPostPutRequestDTO
		}
	});
	const refeicaoPostPutDto: RefeicaoPostPutDto = {
		'nomeRefeicao': 'Almoço',
		'usuarioId': 1
	};

	await prisma.refeicaoUsuario.create({
		data: {
			...refeicaoPostPutDto
		}
	});
	await prisma.alimentosRefeicao.create({
		data: {
			caloria: 123,
			carboidrato: 13,
			gordutaTotal: 10,
			monoinsaturados: 3,
			nomeAlimentoRefeicao: 'teste',
			poliinsaturados: 3,
			porcao: 100,
			proteina: 12,
			saturados: 1,
			refeicaoId: 1
		}
	});

});

afterEach(async () => {
	await prisma.$executeRaw`DELETE FROM usuarios;`
	await prisma.$executeRaw`DELETE FROM alimentosTabelaApp;`
	await prisma.$executeRaw`DELETE FROM refeicaoUsuario;`
	await prisma.$executeRaw`DELETE FROM alimentosRefeicao;`
	await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='alimentosTabelaApp';`
	await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='usuarios';`
	await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='refeicaoUsuario';`
	await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name='alimentosRefeicao';`
});

afterAll(async () => {
	prisma.$disconnect();
	server.close()
});

describe('GET /refeicoes/pesquisar', () => {
	it('Pesquisa uma refeição que não existe', async () => {
		const refeicaoGetDeleteDto: RefeicaoGetDeleteDto = {
			'id': 100
		}
		const response = await request(app).get('/refeicoes/pesquisar').send(refeicaoGetDeleteDto);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Refeição não existe!' });
	});
	it('Pesquisa uma refeição que existe', async () => {
		const refeicaoGetDeleteDto: RefeicaoGetDeleteDto = {
			'id': 1
		}
		const response = await request(app).get('/refeicoes/pesquisar').send(refeicaoGetDeleteDto);

		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('nomeRefeicao', 'Almoço');
	});
});

describe('PATCH /refeicoes/atualizar/nome', () => {
	it('Atualiza o nome de uma refeição que não existe', async () => {
		const RefeicaoPatchNomeDto: RefeicaoPatchNomeDto = {
			'id': 100,
			'nomeRefeicao': 'Jantar'
		}
		const response = await request(app).patch('/refeicoes/atualizar/nome').send(RefeicaoPatchNomeDto);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Refeição não existe!' });
	});
	it('Atualiza o nome de uma refeição que existe', async () => {
		const RefeicaoPatchNomeDto: RefeicaoPatchNomeDto = {
			'id': 1,
			'nomeRefeicao': 'Almoço atualizado'
		}
		const response = await request(app).patch('/refeicoes/atualizar/nome').send(RefeicaoPatchNomeDto);

		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('nomeRefeicao', 'Almoço atualizado');
	});
});

describe('POST /refeicoes/adicionar', () => {
	it('Adiciona uma refeição em um usuário que não existe', async () => {
		const refeicaoPostPutDto: RefeicaoPostPutDto = {
			'nomeRefeicao': 'Café da manha',
			'usuarioId': 100,
		}
		const response = await request(app).post('/refeicoes/adicionar').send(refeicaoPostPutDto);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Usuário não existe!' });
	});
	it('Adiciona uma refeição em um usuário que existe', async () => {
		const refeicaoPostPutDto: RefeicaoPostPutDto = {
			'nomeRefeicao': 'Café da manha',
			'usuarioId': 1,
		}
		const response = await request(app).post('/refeicoes/adicionar').send(refeicaoPostPutDto);

		expect(response.status).toBe(201);
		expect(response.body).toHaveProperty('nomeRefeicao', 'Café da manha');
	});
});

describe('DELETE /refeicoes/remover', () => {
	it('Remove uma refeição que não existe', async () => {
		const refeicaoGetDeleteDto: RefeicaoGetDeleteDto = {
			'id': 100
		}
		const response = await request(app).delete('/refeicoes/remover').send(refeicaoGetDeleteDto);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Refeição não existe!' });
	});
	it('Remove uma refeição que existe', async () => {
		const refeicaoGetDeleteDto: RefeicaoGetDeleteDto = {
			'id': 1
		}
		const response = await request(app).delete('/refeicoes/remover').send(refeicaoGetDeleteDto);

		expect(response.status).toBe(204);
		expect(response.body).toEqual({});
	});
});

describe('POST /refeicoes/adicionar/alimentoApp', () => {
	it('Adiciona uma alimento na refeição que não existe', async () => {
		const refeicaoAlimentoPostDto: RefeicaoAlimentoPostDto = {
			'idAlimento': 1,
			'idRefeicao': 100,
		}
		const response = await request(app).post('/refeicoes/adicionar/alimentoApp').send(refeicaoAlimentoPostDto);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Refeição não existe!' });
	});
	it('Adiciona um alimento que não existe na refeição que existe', async () => {
		const refeicaoAlimentoPostDto: RefeicaoAlimentoPostDto = {
			'idAlimento': 100,
			'idRefeicao': 1,
		}
		const response = await request(app).post('/refeicoes/adicionar/alimentoApp').send(refeicaoAlimentoPostDto);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Alimento não existe!' });
	});
	it('Adiciona uma alimento na refeição que existe', async () => {
		const refeicaoAlimentoPostDto: RefeicaoAlimentoPostDto = {
			'idAlimento': 1,
			'idRefeicao': 1,
		}
		const response = await request(app).post('/refeicoes/adicionar/alimentoApp').send(refeicaoAlimentoPostDto);

		expect(response.status).toBe(201);
		expect(response.body).toHaveProperty('refeicaoId', 1);
	});
});

describe('DELETE /refeicoes/remover/alimentoApp', () => {
	it('Remove um alimento que não existe na refeição do usuário', async () => {
		const refeicaoAlimentoDeleteDto: RefeicaoAlimentoDeleteDto = {
			'id': 100
		}
		const response = await request(app).delete('/refeicoes/remover/alimentoApp').send(refeicaoAlimentoDeleteDto);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Alimento não existe na refeição!' });
	});
	it('Remove um alimento que existe na refeição do usuário', async () => {
		const refeicaoAlimentoDeleteDto: RefeicaoAlimentoDeleteDto = {
			'id': 1
		}
		const response = await request(app).delete('/refeicoes/remover/alimentoApp').send(refeicaoAlimentoDeleteDto);

		expect(response.status).toBe(204);
		expect(response.body).toEqual({});
	});
});