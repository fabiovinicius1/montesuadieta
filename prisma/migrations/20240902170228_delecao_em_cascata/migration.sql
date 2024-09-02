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
    CONSTRAINT "alimentosRefeicao_refeicaoId_fkey" FOREIGN KEY ("refeicaoId") REFERENCES "refeicaoUsuario" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_alimentosRefeicao" ("caloria", "carboidrato", "gordutaTotal", "id", "monoinsaturados", "nomeAlimentoRefeicao", "poliinsaturados", "porcao", "proteina", "refeicaoId", "saturados") SELECT "caloria", "carboidrato", "gordutaTotal", "id", "monoinsaturados", "nomeAlimentoRefeicao", "poliinsaturados", "porcao", "proteina", "refeicaoId", "saturados" FROM "alimentosRefeicao";
DROP TABLE "alimentosRefeicao";
ALTER TABLE "new_alimentosRefeicao" RENAME TO "alimentosRefeicao";
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
    CONSTRAINT "alimentosUsuario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_alimentosUsuario" ("caloria", "carboidrato", "gordutaTotal", "id", "monoinsaturados", "nomeAlimentoUsuario", "poliinsaturados", "porcao", "proteina", "saturados", "usuarioId") SELECT "caloria", "carboidrato", "gordutaTotal", "id", "monoinsaturados", "nomeAlimentoUsuario", "poliinsaturados", "porcao", "proteina", "saturados", "usuarioId" FROM "alimentosUsuario";
DROP TABLE "alimentosUsuario";
ALTER TABLE "new_alimentosUsuario" RENAME TO "alimentosUsuario";
CREATE TABLE "new_refeicaoUsuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeRefeicao" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    CONSTRAINT "refeicaoUsuario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_refeicaoUsuario" ("id", "nomeRefeicao", "usuarioId") SELECT "id", "nomeRefeicao", "usuarioId" FROM "refeicaoUsuario";
DROP TABLE "refeicaoUsuario";
ALTER TABLE "new_refeicaoUsuario" RENAME TO "refeicaoUsuario";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
