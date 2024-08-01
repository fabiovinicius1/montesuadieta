/*
  Warnings:

  - You are about to drop the column `refeicaoId` on the `alimentosUsuario` table. All the data in the column will be lost.
  - Added the required column `usuarioId` to the `receicaoUsuario` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_alimentosUsuario" (
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
    CONSTRAINT "alimentosUsuario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_alimentosUsuario" ("caloria", "carboidrato", "gordutaTotal", "id", "monoinsaturados", "poliinsaturados", "porcao", "proteina", "saturados", "usuarioId") SELECT "caloria", "carboidrato", "gordutaTotal", "id", "monoinsaturados", "poliinsaturados", "porcao", "proteina", "saturados", "usuarioId" FROM "alimentosUsuario";
DROP TABLE "alimentosUsuario";
ALTER TABLE "new_alimentosUsuario" RENAME TO "alimentosUsuario";
CREATE TABLE "new_receicaoUsuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    CONSTRAINT "receicaoUsuario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_receicaoUsuario" ("id", "nome") SELECT "id", "nome" FROM "receicaoUsuario";
DROP TABLE "receicaoUsuario";
ALTER TABLE "new_receicaoUsuario" RENAME TO "receicaoUsuario";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
