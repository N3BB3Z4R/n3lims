-- AlterTable
ALTER TABLE "Samples" ADD COLUMN     "boxId" INTEGER;

-- CreateTable
CREATE TABLE "Box" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "freezersId" INTEGER,
    "shelvingsId" INTEGER,

    CONSTRAINT "Box_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Samples" ADD CONSTRAINT "Samples_boxId_fkey" FOREIGN KEY ("boxId") REFERENCES "Box"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Box" ADD CONSTRAINT "Box_freezersId_fkey" FOREIGN KEY ("freezersId") REFERENCES "Freezers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Box" ADD CONSTRAINT "Box_shelvingsId_fkey" FOREIGN KEY ("shelvingsId") REFERENCES "Shelvings"("id") ON DELETE SET NULL ON UPDATE CASCADE;
