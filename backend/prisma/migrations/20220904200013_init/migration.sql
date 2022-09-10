-- AlterTable
ALTER TABLE "Boxes" ADD COLUMN     "shelvingsId" INTEGER;

-- CreateTable
CREATE TABLE "Shelvings" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "FreezerId" INTEGER NOT NULL,
    "freezersId" INTEGER,

    CONSTRAINT "Shelvings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Shelvings" ADD CONSTRAINT "Shelvings_freezersId_fkey" FOREIGN KEY ("freezersId") REFERENCES "Freezers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boxes" ADD CONSTRAINT "Boxes_shelvingsId_fkey" FOREIGN KEY ("shelvingsId") REFERENCES "Shelvings"("id") ON DELETE SET NULL ON UPDATE CASCADE;
