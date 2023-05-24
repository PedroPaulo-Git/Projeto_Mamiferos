-- CreateTable
CREATE TABLE "Mamiferos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "especie" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "voa" BOOLEAN NOT NULL,
    "carnivoro" BOOLEAN NOT NULL,

    CONSTRAINT "Mamiferos_pkey" PRIMARY KEY ("id")
);
