-- CreateTable
CREATE TABLE "alimentosUsuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "porcao" INTEGER NOT NULL,
    "caloria" REAL NOT NULL,
    "proteina" REAL NOT NULL,
    "carboidrato" REAL NOT NULL,
    "saturados" REAL NOT NULL,
    "monoinsaturados" REAL NOT NULL,
    "poliinsaturados" REAL NOT NULL,
    "gordutaTotal" REAL NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "refeicaoId" INTEGER NOT NULL,
    CONSTRAINT "alimentosUsuario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "alimentosUsuario_refeicaoId_fkey" FOREIGN KEY ("refeicaoId") REFERENCES "receicaoUsuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "receicaoUsuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);
