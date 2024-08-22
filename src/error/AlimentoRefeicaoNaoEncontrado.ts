export const AlimentoRefeicaoNaoEncontrado = (): Error => {
    const error = new Error("Alimento não existe na refeição!");
    (error as any).statusCode = 404;
    return error;
};