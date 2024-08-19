/*
  Warnings:

  - You are about to drop the column `nome` on the `alimentosTabelaApp` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioLogin` on the `alimentosUsuario` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioLogin` on the `refeicaoUsuario` table. All the data in the column will be lost.
  - The primary key for the `usuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `usuarios` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `nomeAlimentoRefeicao` to the `alimentosRefeicao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeAlimentoApp` to the `alimentosTabelaApp` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeAlimentoUsuario` to the `alimentosUsuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `alimentosUsuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `refeicaoUsuario` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_alimentosRefeicao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "porcao" INTEGER NOT NULL,
    "nomeAlimentoRefeicao" TEXT NOT NULL,
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
INSERT INTO "new_alimentosRefeicao" ("caloria", "carboidrato", "gordutaTotal", "id", "monoinsaturados", "poliinsaturados", "porcao", "proteina", "refeicaoId", "saturados") SELECT "caloria", "carboidrato", "gordutaTotal", "id", "monoinsaturados", "poliinsaturados", "porcao", "proteina", "refeicaoId", "saturados" FROM "alimentosRefeicao";
DROP TABLE "alimentosRefeicao";
ALTER TABLE "new_alimentosRefeicao" RENAME TO "alimentosRefeicao";
CREATE TABLE "new_alimentosTabelaApp" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "porcao" INTEGER NOT NULL DEFAULT 100,
    "nomeAlimentoApp" TEXT NOT NULL,
    "caloria" REAL NOT NULL,
    "proteina" REAL NOT NULL,
    "carboidrato" REAL NOT NULL,
    "saturados" REAL NOT NULL,
    "monoinsaturados" REAL NOT NULL,
    "poliinsaturados" REAL NOT NULL,
    "gordutaTotal" REAL NOT NULL
);
INSERT INTO "new_alimentosTabelaApp" ("caloria", "carboidrato", "gordutaTotal", "id", "monoinsaturados", "poliinsaturados", "porcao", "proteina", "saturados") SELECT "caloria", "carboidrato", "gordutaTotal", "id", "monoinsaturados", "poliinsaturados", "porcao", "proteina", "saturados" FROM "alimentosTabelaApp";
DROP TABLE "alimentosTabelaApp";
ALTER TABLE "new_alimentosTabelaApp" RENAME TO "alimentosTabelaApp";
CREATE TABLE "new_alimentosUsuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "porcao" INTEGER NOT NULL,
    "nomeAlimentoUsuario" TEXT NOT NULL,
    "caloria" REAL NOT NULL,
    "proteina" REAL NOT NULL,
    "carboidrato" REAL NOT NULL,
    "saturados" REAL NOT NULL,
    "monoinsaturados" REAL NOT NULL,
    "poliinsaturados" REAL NOT NULL,
    "gordutaTotal" REAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    CONSTRAINT "alimentosUsuario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_alimentosUsuario" ("caloria", "carboidrato", "gordutaTotal", "id", "monoinsaturados", "poliinsaturados", "porcao", "proteina", "saturados") SELECT "caloria", "carboidrato", "gordutaTotal", "id", "monoinsaturados", "poliinsaturados", "porcao", "proteina", "saturados" FROM "alimentosUsuario";
DROP TABLE "alimentosUsuario";
ALTER TABLE "new_alimentosUsuario" RENAME TO "alimentosUsuario";
CREATE TABLE "new_refeicaoUsuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    CONSTRAINT "refeicaoUsuario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_refeicaoUsuario" ("id", "nome") SELECT "id", "nome" FROM "refeicaoUsuario";
DROP TABLE "refeicaoUsuario";
ALTER TABLE "new_refeicaoUsuario" RENAME TO "refeicaoUsuario";
CREATE TABLE "new_usuarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "peso" INTEGER NOT NULL
);
INSERT INTO "new_usuarios" ("id", "login", "peso", "senha") SELECT "id", "login", "peso", "senha" FROM "usuarios";
DROP TABLE "usuarios";
ALTER TABLE "new_usuarios" RENAME TO "usuarios";
CREATE UNIQUE INDEX "usuarios_login_key" ON "usuarios"("login");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
