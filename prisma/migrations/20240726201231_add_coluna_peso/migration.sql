/*
  Warnings:

  - Added the required column `peso` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_usuarios" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "peso" INTEGER NOT NULL
);
INSERT INTO "new_usuarios" ("id", "login", "senha") SELECT "id", "login", "senha" FROM "usuarios";
DROP TABLE "usuarios";
ALTER TABLE "new_usuarios" RENAME TO "usuarios";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
