import express from 'express';
import request from 'supertest';
import { UsuarioGetDeleteRequestDTO } from '../src/dto/usuarioDto/usuarioGetDeleteRequestDTO';
import { UsuarioPostPutRequestDTO } from '../src/dto/usuarioDto/usuarioPostPutRequestDTO';
import { PrismaClient } from '@prisma/client';
import { UsuarioPesoPatchRequestDTO } from '../src/dto/usuarioDto/usuarioPesoPatchRequestDTO';
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
	const usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO = {
		'login': 'fabio',
		'peso': 72,
		'senha': '123'
	};
	await prisma.usuarios.create({
		data: {
			...usuarioPostPutRequestDTO
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

describe('GET /usuarios/pesquisar', () => {
	it('Pesquisa um usuário que não existe', async () => {
		const usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO = {
			'id': 100
		}
		const response = await request(app).get('/usuarios/pesquisar').send(usuarioGetDeleteRequestDTO);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Usuário não existe!' });
	});
	it('Pesquisa um usuário que existe', async () => {
		const usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO = {
			'id': 1
		}
		const response = await request(app).get('/usuarios/pesquisar').send(usuarioGetDeleteRequestDTO);

		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('login', 'fabio');
	});
});

describe('PATCH /usuarios/atualizar/peso', () => {
	it('Atualiza o peso de um usuário que não existe', async () => {
		const usuarioPesoPatchRequestDTO: UsuarioPesoPatchRequestDTO = {
			'id': 100,
			'peso': 100
		}
		const response = await request(app).patch('/usuarios/atualizar/peso').send(usuarioPesoPatchRequestDTO);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Usuário não existe!' });
	});
	it('Atualiza o peso de um usuário que existe', async () => {
		const usuarioPesoPatchRequestDTO: UsuarioPesoPatchRequestDTO = {
			'id': 1,
			'peso': 100
		}
		const response = await request(app).patch('/usuarios/atualizar/peso').send(usuarioPesoPatchRequestDTO);

		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('peso', 100);
	});
});

describe('POST /usuarios/adicionar', () => {
	it('Adiciona uma usuário', async () => {
		const usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO = {
			'login': 'vinicius',
			'peso': 50,
			'senha': "456"
		}
		const response = await request(app).post('/usuarios/adicionar').send(usuarioPostPutRequestDTO);

		expect(response.status).toBe(201);
		expect(response.body).toHaveProperty('id');
		expect(response.body).toHaveProperty('login', 'vinicius');
	});
	it('Adiciona uma usuário com login já existente', async () => {
		const usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO = {
			'login': 'fabio',
			'peso': 72,
			'senha': '123'
		};
		const response = await request(app).post('/usuarios/adicionar').send(usuarioPostPutRequestDTO);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Login já existe!' });
	});
});

describe('DELETE /usuarios/remover', () => {
	it('Remove um usuário que não existe', async () => {
		const usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO = {
			'id': 100
		}
		const response = await request(app).delete('/usuarios/remover').send(usuarioGetDeleteRequestDTO);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Usuário não existe!' });
	});
	it('Remove um usuário que existe', async () => {
		const usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO = {
			'id': 1
		}
		const response = await request(app).delete('/usuarios/remover').send(usuarioGetDeleteRequestDTO);

		expect(response.status).toBe(204);
		expect(response.body).toEqual({});
	});
});