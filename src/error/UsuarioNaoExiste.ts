export const UsuarioNaoExiste = (): Error => {
    const error = new Error("usuario nao existe");
    (error as any).statusCode = 404;
    return error;
};

