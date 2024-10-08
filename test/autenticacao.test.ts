import request from 'supertest';
import { UsuarioPostPutRequestDTO } from '../src/dto/usuarioDto/usuarioPostPutRequestDTO';
import { prisma } from '../src/database/prismaClient';
import { UsuarioLoginPostRequestDTO } from '../src/dto/usuarioDto/usuarioLoginPostRequestDTO';
import Jwt from 'jsonwebtoken';
import { app, server } from '../src/server';
import { AdminPostPutRequestDTO } from '../src/dto/adminDto/AdminPostPutRequestDTO';
import { AdminLoginPostRequestDTO } from '../src/dto/adminDto/AdminLoginPosRequestDTO';

beforeEach(async () => {
	await prisma.$executeRaw`TRUNCATE TABLE "usuarios" RESTART IDENTITY CASCADE;`;
	await prisma.$executeRaw`TRUNCATE TABLE "admin" RESTART IDENTITY;`;
	const usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO = {
		'login': 'siqueira',
		'peso': 72,
		'senha': '123456'
	};
	await request(app).post('/usuarios/adicionar').send(usuarioPostPutRequestDTO);

	const adminPostPutRequestDTO: AdminPostPutRequestDTO = {
		'login': 'admin',
		'senha': '123456'
	};
	await request(app).post('/admin/adicionar').send(adminPostPutRequestDTO);
});

afterEach(async () => {
	await prisma.$executeRaw`TRUNCATE TABLE "usuarios" RESTART IDENTITY CASCADE;`;
	await prisma.$executeRaw`TRUNCATE TABLE "admin" RESTART IDENTITY;`;
});

afterAll(async () => {
	prisma.$disconnect();
	server.close()
});

describe('POST /auth/login/usuario', () => {
	it('Login realizado com sucesso', async () => {
		const usuarioLoginPostRequestDTO: UsuarioLoginPostRequestDTO = {
			'login': 'siqueira',
			'senha': '123456'
		}
		const response = await request(app).post('/auth/login/usuario').send(usuarioLoginPostRequestDTO);
		expect(response.status).toBe(201);
		const decoded = Jwt.verify(response.body, process.env.SECRET!);
		expect(decoded).toEqual(expect.objectContaining({ login: 'siqueira', cargo: 'user', id: 1 }));
	});
	it('Login passado incorreto', async () => {
		const usuarioLoginPostRequestDTO: UsuarioLoginPostRequestDTO = {
			'login': 'siqueir',
			'senha': '123456'
		}
		const response = await request(app).post('/auth/login/usuario').send(usuarioLoginPostRequestDTO);
		expect(response.status).toBe(401);
		expect(response.body).toEqual({ message: 'Login ou senha incorretos!' });
	});
	it('Senha passado incorreto', async () => {
		const usuarioLoginPostRequestDTO: UsuarioLoginPostRequestDTO = {
			'login': 'siqueira',
			'senha': '123123'
		}
		const response = await request(app).post('/auth/login/usuario').send(usuarioLoginPostRequestDTO);
		expect(response.status).toBe(401);
		expect(response.body).toEqual({ message: 'Login ou senha incorretos!' });
	});
	it('Login passado vazio', async () => {
		const usuarioLoginPostRequestDTO: UsuarioLoginPostRequestDTO = {
			'login': '',
			'senha': '123456'
		}
		const response = await request(app).post('/auth/login/usuario').send(usuarioLoginPostRequestDTO);
		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Login é obrigatório' });
	});
	it('Senha passado tamanho incorreto', async () => {
		const usuarioLoginPostRequestDTO: UsuarioLoginPostRequestDTO = {
			'login': 'siqueira',
			'senha': '123'
		}
		const response = await request(app).post('/auth/login/usuario').send(usuarioLoginPostRequestDTO);
		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Senha deve ter pelo menos 6 caracteres' });
	});
});

describe('POST /auth/login/admin', () => {
	it('Login realizado com sucesso', async () => {
		const adminLoginPostRequestDTO: AdminLoginPostRequestDTO = {
			'login': 'admin',
			'senha': '123456'
		}
		const response = await request(app).post('/auth/login/admin').send(adminLoginPostRequestDTO);
		expect(response.status).toBe(201);
		const decoded = Jwt.verify(response.body, process.env.SECRET!);
		expect(decoded).toEqual(expect.objectContaining({ login: 'admin', cargo: 'admin', id: 1 }));
	});
	it('Login passado incorreto', async () => {
		const adminLoginPostRequestDTO: AdminLoginPostRequestDTO = {
			'login': 'admi',
			'senha': '123456'
		}
		const response = await request(app).post('/auth/login/admin').send(adminLoginPostRequestDTO);
		expect(response.status).toBe(401);
		expect(response.body).toEqual({ message: 'Login ou senha incorretos!' });
	});
	it('Senha passado incorreto', async () => {
		const adminLoginPostRequestDTO: AdminLoginPostRequestDTO = {
			'login': 'admin',
			'senha': '123123'
		}
		const response = await request(app).post('/auth/login/admin').send(adminLoginPostRequestDTO);
		expect(response.status).toBe(401);
		expect(response.body).toEqual({ message: 'Login ou senha incorretos!' });
	});
	it('Login passado vazio', async () => {
		const adminLoginPostRequestDTO: AdminLoginPostRequestDTO = {
			'login': '',
			'senha': '123456'
		}
		const response = await request(app).post('/auth/login/admin').send(adminLoginPostRequestDTO);
		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Login é obrigatório' });
	});
	it('Senha passado tamanho incorreto', async () => {
		const adminLoginPostRequestDTO: AdminLoginPostRequestDTO = {
			'login': 'admin',
			'senha': '123'
		}
		const response = await request(app).post('/auth/login/admin').send(adminLoginPostRequestDTO);
		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Senha deve ter pelo menos 6 caracteres' });
	});
});