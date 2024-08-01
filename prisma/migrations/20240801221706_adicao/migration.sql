/*
  Warnings:

  - You are about to drop the `receicaoUsuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "receicaoUsuario";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "refeicaoUsuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    CONSTRAINT "refeicaoUsuario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "alimentosRefeicao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "porcao" INTEGER NOT NULL,
    "caloria" REAL NOT NULL,
    "proteina" REAL NOT NULL,
    "carboidrato" REAL NOT NULL,
    "saturados" REAL NOT NULL,
    "monoinsaturados" REAL NOT NULL,
    "poliinsaturados" REAL NOT NULL,
    "gordutaTotal" REAL NOT NULL,
    "refeicaoId" INTEGER NOT NULL,
    CONSTRAINT "alimentosRefeicao_refeicaoId_fkey" FOREIGN KEY ("refeicaoId") REFERENCES "refeicaoUsuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
