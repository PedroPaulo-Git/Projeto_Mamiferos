/*
  Warnings:

  - Added the required column `descricao` to the `Mamiferos` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Mamiferos_nome_key";

-- AlterTable
ALTER TABLE "Mamiferos" ADD COLUMN     "descricao" TEXT NOT NULL;
