/*
  Warnings:

  - You are about to drop the column `nome` on the `refeicaoUsuario` table. All the data in the column will be lost.
  - Added the required column `nomeRefeicao` to the `refeicaoUsuario` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_refeicaoUsuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeRefeicao" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    CONSTRAINT "refeicaoUsuario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_refeicaoUsuario" ("id", "usuarioId") SELECT "id", "usuarioId" FROM "refeicaoUsuario";
DROP TABLE "refeicaoUsuario";
ALTER TABLE "new_refeicaoUsuario" RENAME TO "refeicaoUsuario";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
