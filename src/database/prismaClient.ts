import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function verificarConexao() {
	try {
		await prisma.$connect();
		console.log('Conexão com o banco de dados bem-sucedida!');
	} catch (error) {
		console.log('Falha na conexão com o banco de dados:', error);
		process.exit(1);
	}
}

export { prisma, verificarConexao }