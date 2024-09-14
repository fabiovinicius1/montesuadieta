-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "peso" INTEGER NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alimentosTabelaApp" (
    "id" SERIAL NOT NULL,
    "porcao" INTEGER NOT NULL DEFAULT 100,
    "nomeAlimentoApp" TEXT NOT NULL,
    "caloria" DOUBLE PRECISION NOT NULL,
    "proteina" DOUBLE PRECISION NOT NULL,
    "carboidrato" DOUBLE PRECISION NOT NULL,
    "saturados" DOUBLE PRECISION NOT NULL,
    "monoinsaturados" DOUBLE PRECISION NOT NULL,
    "poliinsaturados" DOUBLE PRECISION NOT NULL,
    "gordutaTotal" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "alimentosTabelaApp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alimentosUsuario" (
    "id" SERIAL NOT NULL,
    "porcao" INTEGER NOT NULL,
    "nomeAlimentoUsuario" TEXT NOT NULL,
    "caloria" DOUBLE PRECISION NOT NULL,
    "proteina" DOUBLE PRECISION NOT NULL,
    "carboidrato" DOUBLE PRECISION NOT NULL,
    "saturados" DOUBLE PRECISION NOT NULL,
    "monoinsaturados" DOUBLE PRECISION NOT NULL,
    "poliinsaturados" DOUBLE PRECISION NOT NULL,
    "gordutaTotal" DOUBLE PRECISION NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "alimentosUsuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "refeicaoUsuario" (
    "id" SERIAL NOT NULL,
    "nomeRefeicao" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "refeicaoUsuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alimentosRefeicao" (
    "id" SERIAL NOT NULL,
    "porcao" INTEGER NOT NULL,
    "nomeAlimentoRefeicao" TEXT NOT NULL,
    "caloria" DOUBLE PRECISION NOT NULL,
    "proteina" DOUBLE PRECISION NOT NULL,
    "carboidrato" DOUBLE PRECISION NOT NULL,
    "saturados" DOUBLE PRECISION NOT NULL,
    "monoinsaturados" DOUBLE PRECISION NOT NULL,
    "poliinsaturados" DOUBLE PRECISION NOT NULL,
    "gordutaTotal" DOUBLE PRECISION NOT NULL,
    "refeicaoId" INTEGER NOT NULL,

    CONSTRAINT "alimentosRefeicao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_login_key" ON "usuarios"("login");

-- CreateIndex
CREATE UNIQUE INDEX "admin_login_key" ON "admin"("login");

-- AddForeignKey
ALTER TABLE "alimentosUsuario" ADD CONSTRAINT "alimentosUsuario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refeicaoUsuario" ADD CONSTRAINT "refeicaoUsuario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alimentosRefeicao" ADD CONSTRAINT "alimentosRefeicao_refeicaoId_fkey" FOREIGN KEY ("refeicaoId") REFERENCES "refeicaoUsuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
