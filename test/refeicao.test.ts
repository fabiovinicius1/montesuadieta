import request from 'supertest';
import { UsuarioPostPutRequestDTO } from '../src/dto/usuarioDto/usuarioPostPutRequestDTO';
import { PrismaClient } from '@prisma/client';
import { AlimentoAppPostPutDto } from '../src/dto/alimentoAppDto/alimentoAppPostPutDto';
import { RefeicaoGetDeleteDto } from '../src/dto/refeicaoDto/refeicaoGetDeleteDto';
import { RefeicaoPostPutDto } from '../src/dto/refeicaoDto/refeicaoPostPutDto';
import { RefeicaoPatchNomeDto } from '../src/dto/refeicaoDto/refeicaoPatchNomeDto';
import { RefeicaoAlimentoPostDto } from '../src/dto/refeicaoDto/refeicaoAlimentoPostDto';
import { RefeicaoAlimentoDeleteDto } from '../src/dto/refeicaoDto/RefeicaoAlimentoDeleteDto';
import { app, server } from '../src/server';
import { UsuarioLoginPostRequestDTO } from '../src/dto/usuarioDto/usuarioLoginPostRequestDTO';

const prisma = new PrismaClient();
let token:any;

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
		'senha': "123456"
	}
	await request(app).post('/usuarios/adicionar').send(usuarioPostPutRequestDTO);
	const usuarioLoginPostRequestDTO: UsuarioLoginPostRequestDTO = {
		'login': 'vinicius',
		'senha': '123456'
	}
	const response = await request(app).post('/auth/login/usuario').send(usuarioLoginPostRequestDTO);
	token = response.body;
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
		const response = await request(app).get('/refeicoes/pesquisar').send(refeicaoGetDeleteDto).set('Authorization', `${token}`);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Refeição não existe!' });
	});
	it('Pesquisa uma refeição que existe', async () => {
		const refeicaoGetDeleteDto: RefeicaoGetDeleteDto = {
			'id': 1
		}
		const response = await request(app).get('/refeicoes/pesquisar').send(refeicaoGetDeleteDto).set('Authorization', `${token}`);

		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('nomeRefeicao', 'Almoço');
	});
	it('Pesquisa uma refeição com id negativo', async () => {
		const refeicaoGetDeleteDto: RefeicaoGetDeleteDto = {
			'id': -1
		}
		const response = await request(app).get('/refeicoes/pesquisar').send(refeicaoGetDeleteDto).set('Authorization', `${token}`);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Id deve ser um número positivo' });
	});
});

describe('PATCH /refeicoes/atualizar/nome', () => {
	it('Atualiza o nome de uma refeição que não existe', async () => {
		const RefeicaoPatchNomeDto: RefeicaoPatchNomeDto = {
			'id': 100,
			'nomeRefeicao': 'Jantar'
		}
		const response = await request(app).patch('/refeicoes/atualizar/nome').send(RefeicaoPatchNomeDto).set('Authorization', `${token}`);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Refeição não existe!' });
	});
	it('Atualiza o nome de uma refeição que existe', async () => {
		const RefeicaoPatchNomeDto: RefeicaoPatchNomeDto = {
			'id': 1,
			'nomeRefeicao': 'Almoço atualizado'
		}
		const response = await request(app).patch('/refeicoes/atualizar/nome').send(RefeicaoPatchNomeDto).set('Authorization', `${token}`);

		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('nomeRefeicao', 'Almoço atualizado');
	});
	it('Atualiza o nome de uma refeição passando nome vazio', async () => {
		const refeicaoPatchNomeDto: RefeicaoPatchNomeDto = {
			'id': 1,
			'nomeRefeicao': ''
		}
		const response = await request(app).patch('/refeicoes/atualizar/nome').send(refeicaoPatchNomeDto).set('Authorization', `${token}`);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Nome da refeição é obrigatório' });
	});
	it('Atualiza o nome de uma refeição pasando id negativo', async () => {
		const refeicaoPatchNomeDto: RefeicaoPatchNomeDto = {
			'id': -1,
			'nomeRefeicao': 'Almoço atualizado'
		}
		const response = await request(app).patch('/refeicoes/atualizar/nome').send(refeicaoPatchNomeDto).set('Authorization', `${token}`);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Id deve ser um número positivo' });
	});
});

describe('POST /refeicoes/adicionar', () => {
	it('Adiciona uma refeição em um usuário que não existe', async () => {
		const refeicaoPostPutDto: RefeicaoPostPutDto = {
			'nomeRefeicao': 'Café da manha',
			'usuarioId': 100,
		}
		const response = await request(app).post('/refeicoes/adicionar').send(refeicaoPostPutDto).set('Authorization', `${token}`);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Usuário não existe!' });
	});
	it('Adiciona uma refeição em um usuário que existe', async () => {
		const refeicaoPostPutDto: RefeicaoPostPutDto = {
			'nomeRefeicao': 'Café da manha',
			'usuarioId': 1,
		}
		const response = await request(app).post('/refeicoes/adicionar').send(refeicaoPostPutDto).set('Authorization', `${token}`);

		expect(response.status).toBe(201);
		expect(response.body).toHaveProperty('nomeRefeicao', 'Café da manha');
	});
	it('Adiciona uma refeição passando nome vazio', async () => {
		const refeicaoPostPutDto: RefeicaoPostPutDto = {
			'nomeRefeicao': '',
			'usuarioId': 1,
		}
		const response = await request(app).post('/refeicoes/adicionar').send(refeicaoPostPutDto).set('Authorization', `${token}`);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Nome da refeição é obrigatório' });
	});
	it('Adiciona uma refeição pasando id negativo', async () => {
		const refeicaoPostPutDto: RefeicaoPostPutDto = {
			'nomeRefeicao': 'Café da manha',
			'usuarioId': -1,
		}
		const response = await request(app).post('/refeicoes/adicionar').send(refeicaoPostPutDto).set('Authorization', `${token}`);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Id deve ser um número positivo' });
	});
});

describe('DELETE /refeicoes/remover', () => {
	it('Remove uma refeição que não existe', async () => {
		const refeicaoGetDeleteDto: RefeicaoGetDeleteDto = {
			'id': 100
		}
		const response = await request(app).delete('/refeicoes/remover').send(refeicaoGetDeleteDto).set('Authorization', `${token}`);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Refeição não existe!' });
	});
	it('Remove uma refeição que existe', async () => {
		const refeicaoGetDeleteDto: RefeicaoGetDeleteDto = {
			'id': 1
		}
		const response = await request(app).delete('/refeicoes/remover').send(refeicaoGetDeleteDto).set('Authorization', `${token}`);

		expect(response.status).toBe(204);
		expect(response.body).toEqual({});
	});
	it('Remove uma refeição com id negativo', async () => {
		const refeicaoGetDeleteDto: RefeicaoGetDeleteDto = {
			'id': -1
		}
		const response = await request(app).delete('/refeicoes/remover').send(refeicaoGetDeleteDto).set('Authorization', `${token}`);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Id deve ser um número positivo' });
	});
});

describe('POST /refeicoes/adicionar/alimentoApp', () => {
	it('Adiciona uma alimento na refeição que não existe', async () => {
		const refeicaoAlimentoPostDto: RefeicaoAlimentoPostDto = {
			'idAlimento': 1,
			'idRefeicao': 100,
		}
		const response = await request(app).post('/refeicoes/adicionar/alimentoApp').send(refeicaoAlimentoPostDto).set('Authorization', `${token}`);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Refeição não existe!' });
	});
	it('Adiciona um alimento que não existe na refeição que existe', async () => {
		const refeicaoAlimentoPostDto: RefeicaoAlimentoPostDto = {
			'idAlimento': 100,
			'idRefeicao': 1,
		}
		const response = await request(app).post('/refeicoes/adicionar/alimentoApp').send(refeicaoAlimentoPostDto).set('Authorization', `${token}`);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Alimento não existe!' });
	});
	it('Adiciona uma alimento na refeição que existe', async () => {
		const refeicaoAlimentoPostDto: RefeicaoAlimentoPostDto = {
			'idAlimento': 1,
			'idRefeicao': 1,
		}
		const response = await request(app).post('/refeicoes/adicionar/alimentoApp').send(refeicaoAlimentoPostDto).set('Authorization', `${token}`);

		expect(response.status).toBe(201);
		expect(response.body).toHaveProperty('refeicaoId', 1);
	});
	it('Adiciona uma alimento na refeição passando idAlimento negativo', async () => {
		const refeicaoAlimentoPostDto: RefeicaoAlimentoPostDto = {
			'idAlimento': -1,
			'idRefeicao': 1,
		}
		const response = await request(app).post('/refeicoes/adicionar/alimentoApp').send(refeicaoAlimentoPostDto).set('Authorization', `${token}`);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Id deve ser um número positivo' });
	});
	it('Adiciona uma alimento na refeição passando idRefeicao negativo', async () => {
		const refeicaoAlimentoPostDto: RefeicaoAlimentoPostDto = {
			'idAlimento': 1,
			'idRefeicao': -1,
		}
		const response = await request(app).post('/refeicoes/adicionar/alimentoApp').send(refeicaoAlimentoPostDto).set('Authorization', `${token}`);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Id deve ser um número positivo' });
	});
});

describe('DELETE /refeicoes/remover/alimentoApp', () => {
	it('Remove um alimento que não existe na refeição do usuário', async () => {
		const refeicaoAlimentoDeleteDto: RefeicaoAlimentoDeleteDto = {
			'id': 100
		}
		const response = await request(app).delete('/refeicoes/remover/alimentoApp').send(refeicaoAlimentoDeleteDto).set('Authorization', `${token}`);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Alimento não existe na refeição!' });
	});
	it('Remove um alimento que existe na refeição do usuário', async () => {
		const refeicaoAlimentoDeleteDto: RefeicaoAlimentoDeleteDto = {
			'id': 1
		}
		const response = await request(app).delete('/refeicoes/remover/alimentoApp').send(refeicaoAlimentoDeleteDto).set('Authorization', `${token}`);

		expect(response.status).toBe(204);
		expect(response.body).toEqual({});
	});
	it('Remove um alimento da refeição com id negativo', async () => {
		const refeicaoAlimentoDeleteDto: RefeicaoAlimentoDeleteDto = {
			'id': -1
		}
		const response = await request(app).delete('/refeicoes/remover/alimentoApp').send(refeicaoAlimentoDeleteDto).set('Authorization', `${token}`);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Id deve ser um número positivo' });
	});
});