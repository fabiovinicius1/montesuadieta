import express from 'express';
import request from 'supertest';
import { UsuarioPostPutRequestDTO } from '../src/dto/usuarioDto/usuarioPostPutRequestDTO';
import { PrismaClient } from '@prisma/client';
import { UsuarioLoginPostRequestDTO } from '../src/dto/usuarioDto/usuarioLoginPostRequestDTO';
import Jwt from 'jsonwebtoken';
import alimentoAppController from '../src/controllers/alimentoAppController';
import authController from '../src/controllers/authController';
import refeicaoController from '../src/controllers/refeicaoController';
import usuarioController from '../src/controllers/usuarioController';

const app = express();
const PORT = 3003
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
	const usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO = {
		'login': 'siqueira',
		'peso': 72,
		'senha': '789'
	};
	await request(app).post('/usuarios/adicionar').send(usuarioPostPutRequestDTO);
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

describe('POST /auth/login/usuario', () => {
	it('Login realizado com sucesso', async () => {
		const usuarioLoginPostRequestDTO: UsuarioLoginPostRequestDTO = {
			'login': 'siqueira',
			'senha': '789'
		}
		const response = await request(app).post('/auth/login/usuario').send(usuarioLoginPostRequestDTO);

		expect(response.status).toBe(201);
		const decoded = Jwt.verify(response.body, process.env.SECRET!);
		expect(decoded).toEqual('siqueira');
	});
	it('Login passado incorreto', async () => {
		const usuarioLoginPostRequestDTO: UsuarioLoginPostRequestDTO = {
			'login': 'siqueir',
			'senha': '789'
		}
		const response = await request(app).post('/auth/login/usuario').send(usuarioLoginPostRequestDTO);
		expect(response.status).toBe(401);
		expect(response.body).toEqual({ message: 'Login ou senha incorretos!' });
	});
	it('Senha passado incorreto', async () => {
		const usuarioLoginPostRequestDTO: UsuarioLoginPostRequestDTO = {
			'login': 'siqueira',
			'senha': '123'
		}
		const response = await request(app).post('/auth/login/usuario').send(usuarioLoginPostRequestDTO);

		expect(response.status).toBe(401);
		expect(response.body).toEqual({ message: 'Login ou senha incorretos!' });
	});
});