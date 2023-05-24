/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Mamiferos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Mamiferos_nome_key" ON "Mamiferos"("nome");
