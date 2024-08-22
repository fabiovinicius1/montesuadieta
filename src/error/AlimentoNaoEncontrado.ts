export const AlimentoNaoEncontrado = (): Error => {
    const error = new Error("Alimento não existe!");
    (error as any).statusCode = 404;
    return error;
};