import request from 'supertest';
import app from '../src/server';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { UsuarioGetDeleteRequestDTO } from '../src/dto/usuarioDto/usuarioGetDeleteRequestDTO';
import { UsuarioPostPutRequestDTO } from '../src/dto/usuarioDto/usuarioPostPutRequestDTO';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

describe('GET /usuarios/pesquisar', () => {
	beforeAll(async () => {
		const usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO = {
			'login': 'fabio',
			'peso': 72,
			'senha': '123'
		}
		await prisma.usuarios.create({
			data:{
				...usuarioPostPutRequestDTO
			}
		})
	  });
	  afterAll(async () => {
		await prisma.usuarios.deleteMany()
	  });
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
		expect(response.body).toHaveProperty('login','fabio');
	});
});

// describe('DELETE /usuarios/remover', () => {
// 	beforeAll(async () => {
// 		const usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO = {
// 			'login': 'fabio',
// 			'peso': 72,
// 			'senha': '123'
// 		}
// 		await request(app).post('/usuarios/adicionar').send(usuarioPostPutRequestDTO);
// 	  });
// 	it('Remove um usuário que não existe', async () => {
// 		const usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO = { 
// 			'id': 2 
// 		}
// 		const response = await request(app).delete('/usuarios/remover').send(usuarioGetDeleteRequestDTO);

// 		expect(response.status).toBe(404);
// 		expect(response.body).toEqual({ message: 'Usuário não existe!' });
// 	});
// 	it('Remove um usuário que existe', async () => {
// 		const usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO = { 
// 			'id': 2 
// 		}
// 		const response = await request(app).delete('/usuarios/remover').send(usuarioGetDeleteRequestDTO);

// 		expect(response.status).toBe(204);
// 		expect(response.body).toEqual({});
// 	});
// });

// describe('PATCH /usuarios/atualizar/contato', () => {
// 	it('Remove uma empresa que nao existe', async () => {
// 		const empresaContatoPatchRequestDto: EmpresaContatoPatchRequestDto = {
// 			'id': 1,
// 			'telefone': 'telefone novo'
// 		}
// 		const response = await request(app).patch('/usuarios/atualizar/contato').send(empresaContatoPatchRequestDto);

// 		expect(response.status).toBe(404);
// 		expect(response.body).toEqual({ message: 'Empresa não exsite!' });
// 	});
// });

// describe('POST /usuarios/adicionar', () => {
// 	it('Adiciona uma empresa', async () => {
// 		const empresaPostPutRequestDto: EmpresaPostPutRequestDto = {
// 			"nome": "nome string",
// 			"endereco": "endereco string",
// 			"telefone": "contato string",
// 			"cnpj": "cnpj string",
// 			"email": "email string",
// 			"username": "username string",
// 			"cep": "cep string",
// 			"senha": "123"
// 		}
// 		const response = await request(app).post('/usuarios/adicionar').send(empresaPostPutRequestDto);

// 		expect(response.status).toBe(201);
// 		expect(response.body).toHaveProperty('id');
// 	});
// });