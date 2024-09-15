import request from 'supertest';
import { UsuarioPostPutRequestDTO } from '../src/dto/usuarioDto/usuarioPostPutRequestDTO';
import { prisma } from '../src/database/prismaClient';
import { UsuarioLoginPostRequestDTO } from '../src/dto/usuarioDto/usuarioLoginPostRequestDTO';
import { app, server } from '../src/server';
import { AdminPostPutRequestDTO } from '../src/dto/adminDto/AdminPostPutRequestDTO';
import { AdminLoginPostRequestDTO } from '../src/dto/adminDto/AdminLoginPosRequestDTO';
import { AlimentoAppPostPutDto } from '../src/dto/alimentoAppDto/alimentoAppPostPutDto';
import { AlimentoAppGetDeleteDto } from '../src/dto/alimentoAppDto/alimentoAppGetDeleteDto';

let tokenUser: any;
let tokenAdmin: any;

beforeEach(async () => {
	await prisma.$executeRaw`TRUNCATE TABLE "usuarios" RESTART IDENTITY CASCADE;`;
	await prisma.$executeRaw`TRUNCATE TABLE "alimentosTabelaApp" RESTART IDENTITY;`;
	await prisma.$executeRaw`TRUNCATE TABLE "admin" RESTART IDENTITY;`;
	const usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO = {
		'login': 'siqueira',
		'peso': 72,
		'senha': '123456'
	};
	await request(app).post('/usuarios/adicionar').send(usuarioPostPutRequestDTO);
	const usuarioLoginPostRequestDTO: UsuarioLoginPostRequestDTO = {
		'login': 'siqueira',
		'senha': '123456'
	}
	const responseUser = await request(app).post('/auth/login/usuario').send(usuarioLoginPostRequestDTO);
	tokenUser = responseUser.body;

	const adminPostPutRequestDTO: AdminPostPutRequestDTO = {
		'login': 'admin',
		'senha': '123456'
	};
	await request(app).post('/admin/adicionar').send(adminPostPutRequestDTO);
	const adminLoginPostRequestDTO: AdminLoginPostRequestDTO = {
		'login': 'admin',
		'senha': '123456'
	}
	const responseAdmin = await request(app).post('/auth/login/admin').send(adminLoginPostRequestDTO);
	tokenAdmin = responseAdmin.body;
	const alimentoAppPostPutDto: AlimentoAppPostPutDto = {
		"porcao": 100,
		"nomeAlimentoApp": "Arroz, integral, cozido",
		"caloria": 123.5348925,
		"proteina": 2.58825,
		"carboidrato": 25.80975,
		"saturados": 0.3,
		"monoinsaturados": 0.4,
		"poliinsaturados": 0.3,
		"gordutaTotal": 1
	}
	await prisma.alimentosTabelaApp.create({
		data:{
			...alimentoAppPostPutDto
		}
	})
});

afterEach(async () => {
	await prisma.$executeRaw`TRUNCATE TABLE "usuarios" RESTART IDENTITY CASCADE;`;
	await prisma.$executeRaw`TRUNCATE TABLE "alimentosTabelaApp" RESTART IDENTITY;`;
	await prisma.$executeRaw`TRUNCATE TABLE "admin" RESTART IDENTITY;`;
});

afterAll(async () => {
	prisma.$disconnect();
	server.close()
});

describe('POST /alimentosApp/adicionar', () => {
	it('Admin realiza uma adiçao de um alimentoApp', async () => {
		const alimentoAppPostPutDto: AlimentoAppPostPutDto = {
			"porcao": 100,
			"nomeAlimentoApp": "Arroz, integral, cozido",
			"caloria": 123.5348925,
			"proteina": 2.58825,
			"carboidrato": 25.80975,
			"saturados": 0.3,
			"monoinsaturados": 0.4,
			"poliinsaturados": 0.3,
			"gordutaTotal": 1
		}
		const response = await request(app).post('/alimentosApp/adicionar').send(alimentoAppPostPutDto).set('Authorization', `${tokenAdmin}`);
		expect(response.status).toBe(201);
		expect(response.body).toHaveProperty('id');
		expect(response.body).toHaveProperty('nomeAlimentoApp', 'Arroz, integral, cozido');
	});
	it('Usuário comun realiza uma adiçao de um alimentoApp', async () => {
		const alimentoAppPostPutDto: AlimentoAppPostPutDto = {
			"porcao": 100,
			"nomeAlimentoApp": "Arroz, integral, cozido",
			"caloria": 123.5348925,
			"proteina": 2.58825,
			"carboidrato": 25.80975,
			"saturados": 0.3,
			"monoinsaturados": 0.4,
			"poliinsaturados": 0.3,
			"gordutaTotal": 1
		}
		const response = await request(app).post('/alimentosApp/adicionar').send(alimentoAppPostPutDto).set('Authorization', `${tokenUser}`);
		expect(response.status).toBe(403);
		expect(response.body).toEqual({ message: 'Acesso negado. Apenas administradores podem modificar esse recurso.' });
	});
});

describe('DELETE /alimentosApp/remover', () => {
	it('Admin realiza a remoção de um alimentoApp', async () => {
		const alimentoAppGetDeleteDto: AlimentoAppGetDeleteDto = {
			'id': 1,
		}
		const response = await request(app).delete('/alimentosApp/remover').send(alimentoAppGetDeleteDto).set('Authorization', `${tokenAdmin}`);
		expect(response.status).toBe(204);
	});
	it('Usuário comun realiza a remoção de um alimentoApp', async () => {
		const alimentoAppGetDeleteDto: AlimentoAppGetDeleteDto = {
			'id': 1,
		}
		const response = await request(app).delete('/alimentosApp/remover').send(alimentoAppGetDeleteDto).set('Authorization', `${tokenUser}`);
		expect(response.status).toBe(403);
		expect(response.body).toEqual({ message: 'Acesso negado. Apenas administradores podem modificar esse recurso.' });
	});

});