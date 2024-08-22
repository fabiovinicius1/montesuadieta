export const RefeicaoNaoExiste = (): Error => {
    const error = new Error("Refeição não existe!");
    (error as any).statusCode = 404;
    return error;
};
