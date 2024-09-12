export const validacaoError = (mensagem: string): Error => {
	const error = new Error(mensagem);
	(error as any).statusCode = 400;
	return error;
};
