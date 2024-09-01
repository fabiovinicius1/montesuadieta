import request from 'supertest';
import app from '../src/server';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { UsuarioGetDeleteRequestDTO } from '../src/dto/usuarioDto/usuarioGetDeleteRequestDTO';
import { UsuarioPostPutRequestDTO } from '../src/dto/usuarioDto/usuarioPostPutRequestDTO';
import { PrismaClient } from '@prisma/client';
import { UsuarioPesoPatchRequestDTO } from '../src/dto/usuarioDto/usuarioPesoPatchRequestDTO';

const prisma = new PrismaClient();
beforeAll(async () => {
	const usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO = {
		'login': 'fabio',
		'peso': 72,
		'senha': '123'
	}
	await prisma.usuarios.create({
		data: {
			...usuarioPostPutRequestDTO
		}
	});
});

afterAll(async () => {
	await prisma.usuarios.deleteMany();
});

describe('GET /usuarios/pesquisar', () => {
	it('Pesquisa um usuário que não existe', async () => {
		const usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO = {
			'id': 2
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

describe('PATCH /usuarios/atualizar/contato', () => {
	it('Atualiza o peso de um usuário que não existe', async () => {
		const usuarioPesoPatchRequestDTO: UsuarioPesoPatchRequestDTO = {
			'id': 2,
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
			'login': 'vinicius',
			'peso': 70,
			'senha': "789"
		}
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