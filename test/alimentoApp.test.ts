import express from 'express';
import request from 'supertest';
import { PrismaClient } from '@prisma/client';
import { AlimentoAppPostPutDto } from '../src/dto/alimentoAppDto/alimentoAppPostPutDto';
import { RefeicaoPostPutDto } from '../src/dto/refeicaoDto/refeicaoPostPutDto';
import alimentoAppController from '../src/controllers/alimentoAppController';
import authController from '../src/controllers/authController';
import refeicaoController from '../src/controllers/refeicaoController';
import usuarioController from '../src/controllers/usuarioController';
import { AlimentoAppGetDeleteDto } from '../src/dto/alimentoAppDto/alimentoAppGetDeleteDto';

const app = express();
const PORT = 3002
app.use(express.json());
app.use('/usuarios', usuarioController);
app.use('/alimentosApp', alimentoAppController);
app.use('/refeicoes', refeicaoController);
app.use('/auth', authController);
const server = app.listen(PORT, () => {
	console.log(`Servidor rodando em http://localhost:${PORT}`);
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

describe('GET /alimentosApp/pesquisar', () => {
	it('Pesquisa um alimento do App que não existe', async () => {
		const alimentoAppGetDeleteDto: AlimentoAppGetDeleteDto = {
			'id': 100
		}
		const response = await request(app).get('/alimentosApp/pesquisar').send(alimentoAppGetDeleteDto);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Alimento não existe!' });
	});
	it('Pesquisa um alimento do App que existe', async () => {
		const alimentoAppGetDeleteDto: AlimentoAppGetDeleteDto = {
			'id': 1
		}
		const response = await request(app).get('/alimentosApp/pesquisar').send(alimentoAppGetDeleteDto);

		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('nomeAlimentoApp', 'arroz');
	});
});


describe('POST /alimentosApp/adicionar', () => {
	it('Adiciona uma alimento do App', async () => {
		const alimentoAppPostPutDto: AlimentoAppPostPutDto = {
			"porcao": 100,
			"nomeAlimentoApp": "teste",
			"caloria": 12,
			"proteina": 6,
			"carboidrato": 80,
			"saturados": 3,
			"monoinsaturados": 4,
			"poliinsaturados": 3,
			"gordutaTotal": 10
		}
		const response = await request(app).post('/alimentosApp/adicionar').send(alimentoAppPostPutDto);

		expect(response.status).toBe(201);
		expect(response.body).toHaveProperty('id');
		expect(response.body).toHaveProperty('nomeAlimentoApp', 'teste');
	});
});

describe('DELETE /alimentosApp/remover', () => {
	it('Remove um alimento do App que não existe', async () => {
		const alimentoAppGetDeleteDto: AlimentoAppGetDeleteDto = {
			'id': 100
		}
		const response = await request(app).delete('/alimentosApp/remover').send(alimentoAppGetDeleteDto);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Alimento não existe!' });
	});
	it('Remove um alimento do App que existe', async () => {
		const alimentoAppGetDeleteDto: AlimentoAppGetDeleteDto = {
			'id': 1
		}
		const response = await request(app).delete('/alimentosApp/remover').send(alimentoAppGetDeleteDto);

		expect(response.status).toBe(204);
		expect(response.body).toEqual({});
	});
});