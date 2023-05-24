
/*
  Warnings:

  - The primary key for the `Mamiferos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Mamiferos` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Mamiferos" DROP CONSTRAINT "Mamiferos_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Mamiferos_pkey" PRIMARY KEY ("id");
/*
  Warnings:

  - The primary key for the `Mamiferos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Mamiferos` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Mamiferos" DROP CONSTRAINT "Mamiferos_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Mamiferos_pkey" PRIMARY KEY ("id");

