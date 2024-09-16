import request from 'supertest';
import { app, server } from '../src/server';
import { AdminPostPutRequestDTO } from '../src/dto/adminDto/AdminPostPutRequestDTO';
import { AdminLoginPostRequestDTO } from '../src/dto/adminDto/AdminLoginPosRequestDTO';
import { AdminGetDeleteRequestDTO } from '../src/dto/adminDto/AdminGetDeleteRequestDTO';
import { prisma } from '../src/database/prismaClient';

let token: any;

beforeEach(async () => {
	await prisma.$executeRaw`TRUNCATE TABLE "admin" RESTART IDENTITY;`;

	const adminPostPutRequestDTO: AdminPostPutRequestDTO = {
		'login': 'admin',
		'senha': '123456'
	};
	await request(app).post('/admin/adicionar').send(adminPostPutRequestDTO);
	const adminLoginPostRequestDTO: AdminLoginPostRequestDTO = {
		'login': 'admin',
		'senha': '123456'
	}
	const response = await request(app).post('/auth/login/admin').send(adminLoginPostRequestDTO);
	token = response.body;
});

afterEach(async () => {
	await prisma.$executeRaw`TRUNCATE TABLE "admin" RESTART IDENTITY;`;
});

afterAll(async () => {
	prisma.$disconnect();
	server.close()
});

describe('GET /admin/pesquisar', () => {
	it('Pesquisa um admin que não existe', async () => {
		const adminGetDeleteRequestDTO: AdminGetDeleteRequestDTO = {
			'id': 100
		}
		const response = await request(app).get('/admin/pesquisar').send(adminGetDeleteRequestDTO).set('Authorization', `${token}`);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Admin não existe!' });
	});
	it('Pesquisa um admin que existe', async () => {
		const adminGetDeleteRequestDTO: AdminGetDeleteRequestDTO = {
			'id': 1
		}
		const response = await request(app).get('/admin/pesquisar').send(adminGetDeleteRequestDTO).set('Authorization', `${token}`);

		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('login', 'admin');
	});
});


describe('POST /admin/adicionar', () => {
	it('Adiciona uma admin', async () => {
		const adminPostPutRequestDTO: AdminPostPutRequestDTO = {
			'login': 'adminVinicius',
			'senha': "123456"
		}
		const response = await request(app).post('/admin/adicionar').send(adminPostPutRequestDTO);

		expect(response.status).toBe(201);
		expect(response.body).toHaveProperty('id');
		expect(response.body).toHaveProperty('login', 'adminVinicius');
	});
	it('Adiciona uma admin com login já existente', async () => {
		const adminPostPutRequestDTO: AdminPostPutRequestDTO = {
			'login': 'admin',
			'senha': '123456'
		};
		const response = await request(app).post('/admin/adicionar').send(adminPostPutRequestDTO);

		expect(response.status).toBe(409);
		expect(response.body).toEqual({ message: 'Login já existe!' });
	});
	it('Adiciona uma admin com login vazio', async () => {
		const adminPostPutRequestDTO: AdminPostPutRequestDTO = {
			'login': '',
			'senha': '123456'
		};
		const response = await request(app).post('/usuarios/adicionar').send(adminPostPutRequestDTO);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Login é obrigatório' });
	});
	it('Adiciona uma admin com senha com tamanho invalido', async () => {
		const adminPostPutRequestDTO: AdminPostPutRequestDTO = {
			'login': 'admin',
			'senha': '123'
		};
		const response = await request(app).post('/admin/adicionar').send(adminPostPutRequestDTO);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Senha deve ter pelo menos 6 caracteres' });
	});
});

describe('DELETE /admin/remover', () => {
	it('Remove um admin que não existe', async () => {
		const adminGetDeleteRequestDTO: AdminGetDeleteRequestDTO = {
			'id': 100
		}
		const response = await request(app).delete('/admin/remover').send(adminGetDeleteRequestDTO).set('Authorization', `${token}`);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Admin não existe!' });
	});
	it('Remove um admin que existe', async () => {
		const adminGetDeleteRequestDTO: AdminGetDeleteRequestDTO = {
			'id': 1
		}
		const response = await request(app).delete('/admin/remover').send(adminGetDeleteRequestDTO).set('Authorization', `${token}`);

		expect(response.status).toBe(204);
		expect(response.body).toEqual({});
	});
	it('Remove um admin com id negativo', async () => {
		const adminGetDeleteRequestDTO: AdminGetDeleteRequestDTO = {
			'id': -1
		}
		const response = await request(app).delete('/admin/remover').send(adminGetDeleteRequestDTO).set('Authorization', `${token}`);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Id deve ser um número positivo' });
	});
});