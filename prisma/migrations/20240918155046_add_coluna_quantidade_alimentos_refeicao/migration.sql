/*
  Warnings:

  - Added the required column `quantidade` to the `alimentosRefeicao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "alimentosRefeicao" ADD COLUMN     "quantidade" DOUBLE PRECISION NOT NULL;
