export const LoginJaExiste = (): Error => {
    const error = new Error("Login já existe!");
    (error as any).statusCode = 404;
    return error;
};

