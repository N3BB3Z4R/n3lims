/*
  Warnings:

  - You are about to drop the column `freezersId` on the `Boxes` table. All the data in the column will be lost.
  - You are about to drop the column `shelvingsId` on the `Boxes` table. All the data in the column will be lost.
  - You are about to drop the column `projectsId` on the `Samples` table. All the data in the column will be lost.
  - You are about to drop the column `freezersId` on the `Shelvings` table. All the data in the column will be lost.
  - Added the required column `FreezerId` to the `Boxes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ShelvingId` to the `Boxes` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `Samples` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `temperature` on the `Samples` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "SampleType" AS ENUM ('DNA', 'RNA', 'Blood', 'Saliva', 'Protein', 'Cell', 'Tissue', 'Other');

-- CreateEnum
CREATE TYPE "ProjectType" AS ENUM ('Research', 'Clinical', 'Trial', 'Study', 'Other');

-- CreateEnum
CREATE TYPE "Slots" AS ENUM ('A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11', 'A12', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10', 'E11', 'E12', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10', 'G11', 'G12', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'H11', 'H12', 'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9', 'I10', 'I11', 'I12', 'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10', 'J11', 'J12', 'K1', 'K2', 'K3', 'K4', 'K5', 'K6', 'K7', 'K8', 'K9', 'K10', 'K11', 'K12', 'L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8', 'L9', 'L10', 'L11', 'L12');

-- DropForeignKey
ALTER TABLE "Boxes" DROP CONSTRAINT "Boxes_freezersId_fkey";

-- DropForeignKey
ALTER TABLE "Boxes" DROP CONSTRAINT "Boxes_shelvingsId_fkey";

-- DropForeignKey
ALTER TABLE "Samples" DROP CONSTRAINT "Samples_projectsId_fkey";

-- DropForeignKey
ALTER TABLE "Shelvings" DROP CONSTRAINT "Shelvings_freezersId_fkey";

-- AlterTable
ALTER TABLE "Box" ADD COLUMN     "Slots" "Slots"[];

-- AlterTable
ALTER TABLE "Boxes" DROP COLUMN "freezersId",
DROP COLUMN "shelvingsId",
ADD COLUMN     "FreezerId" INTEGER NOT NULL,
ADD COLUMN     "ShelvingId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Projects" ADD COLUMN     "participantId" INTEGER;

-- AlterTable
ALTER TABLE "Samples" DROP COLUMN "projectsId",
ADD COLUMN     "participantsId" INTEGER,
DROP COLUMN "type",
ADD COLUMN     "type" "SampleType" NOT NULL,
DROP COLUMN "temperature",
ADD COLUMN     "temperature" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "Shelvings" DROP COLUMN "freezersId",
ADD COLUMN     "freezerId" INTEGER;

-- CreateTable
CREATE TABLE "Participants" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "Participants_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Samples" ADD CONSTRAINT "Samples_ProjectId_fkey" FOREIGN KEY ("ProjectId") REFERENCES "Projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Samples" ADD CONSTRAINT "Samples_participantsId_fkey" FOREIGN KEY ("participantsId") REFERENCES "Participants"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Participants"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shelvings" ADD CONSTRAINT "Shelvings_FreezerId_fkey" FOREIGN KEY ("FreezerId") REFERENCES "Freezers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boxes" ADD CONSTRAINT "Boxes_FreezerId_fkey" FOREIGN KEY ("FreezerId") REFERENCES "Freezers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boxes" ADD CONSTRAINT "Boxes_ShelvingId_fkey" FOREIGN KEY ("ShelvingId") REFERENCES "Shelvings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
