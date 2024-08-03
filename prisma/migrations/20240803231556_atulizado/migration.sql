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
    "usuarioLogin" TEXT NOT NULL,
    CONSTRAINT "alimentosUsuario_usuarioLogin_fkey" FOREIGN KEY ("usuarioLogin") REFERENCES "usuarios" ("login") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_alimentosUsuario" ("caloria", "carboidrato", "gordutaTotal", "id", "monoinsaturados", "poliinsaturados", "porcao", "proteina", "saturados", "usuarioLogin") SELECT "caloria", "carboidrato", "gordutaTotal", "id", "monoinsaturados", "poliinsaturados", "porcao", "proteina", "saturados", "usuarioLogin" FROM "alimentosUsuario";
DROP TABLE "alimentosUsuario";
ALTER TABLE "new_alimentosUsuario" RENAME TO "alimentosUsuario";
CREATE TABLE "new_refeicaoUsuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "usuarioLogin" TEXT NOT NULL,
    CONSTRAINT "refeicaoUsuario_usuarioLogin_fkey" FOREIGN KEY ("usuarioLogin") REFERENCES "usuarios" ("login") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_refeicaoUsuario" ("id", "nome", "usuarioLogin") SELECT "id", "nome", "usuarioLogin" FROM "refeicaoUsuario";
DROP TABLE "refeicaoUsuario";
ALTER TABLE "new_refeicaoUsuario" RENAME TO "refeicaoUsuario";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
