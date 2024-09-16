export const ErrorDb = (info: any, descricao: string): Error => {
    const error = new Error("Error no banco de dados!");
	(error as any).info = info;
	(error as any).descricao = descricao;
    (error as any).statusCode = 500;
    return error;
};

