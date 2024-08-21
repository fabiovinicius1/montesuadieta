export const UsuarioNaoExiste = (): Error => {
    const error = new Error("Usuário não existe!");
    (error as any).statusCode = 404;
    return error;
};

