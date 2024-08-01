-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_alimentosTabelaApp" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "porcao" INTEGER NOT NULL DEFAULT 100,
    "nome" TEXT NOT NULL,
    "caloria" REAL NOT NULL,
    "proteina" REAL NOT NULL,
    "carboidrato" REAL NOT NULL,
    "saturados" REAL NOT NULL,
    "monoinsaturados" REAL NOT NULL,
    "poliinsaturados" REAL NOT NULL,
    "gordutaTotal" REAL NOT NULL
);
INSERT INTO "new_alimentosTabelaApp" ("caloria", "carboidrato", "gordutaTotal", "id", "monoinsaturados", "nome", "poliinsaturados", "proteina", "saturados") SELECT "caloria", "carboidrato", "gordutaTotal", "id", "monoinsaturados", "nome", "poliinsaturados", "proteina", "saturados" FROM "alimentosTabelaApp";
DROP TABLE "alimentosTabelaApp";
ALTER TABLE "new_alimentosTabelaApp" RENAME TO "alimentosTabelaApp";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
