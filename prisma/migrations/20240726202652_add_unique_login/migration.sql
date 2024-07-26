/*
  Warnings:

  - A unique constraint covering the columns `[login]` on the table `usuarios` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "usuarios_login_key" ON "usuarios"("login");
