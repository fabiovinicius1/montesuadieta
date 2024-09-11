export const AdminNaoExiste = (): Error => {
    const error = new Error("Admin não existe!");
    (error as any).statusCode = 404;
    return error;
};