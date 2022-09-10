/*
  Warnings:

  - You are about to drop the column `ShelvingId` on the `Boxes` table. All the data in the column will be lost.
  - You are about to drop the column `BoxId` on the `Samples` table. All the data in the column will be lost.
  - You are about to drop the column `FreezerId` on the `Samples` table. All the data in the column will be lost.
  - You are about to drop the column `ProjectId` on the `Samples` table. All the data in the column will be lost.
  - You are about to drop the column `ShelvingId` on the `Samples` table. All the data in the column will be lost.
  - You are about to drop the column `SlotId` on the `Samples` table. All the data in the column will be lost.
  - You are about to drop the column `boxId` on the `Samples` table. All the data in the column will be lost.
  - You are about to drop the column `participantsId` on the `Samples` table. All the data in the column will be lost.
  - You are about to drop the `Box` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Participants` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Shelvings` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[workflowId]` on the table `Projects` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Slots` to the `Boxes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Freezers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `temperature` to the `Freezers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workflowId` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Shelving` to the `Samples` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `Samples` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slotId` to the `Samples` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `temperature` on the `Samples` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Temperatures" AS ENUM ('Room', 'Cold', 'Frozen', 'UltraFrozen');

-- CreateEnum
CREATE TYPE "FreezerLocations" AS ENUM ('Basement', 'FirstFloor', 'SecondFloor', 'ThirdFloor', 'FourthFloor');

-- CreateEnum
CREATE TYPE "Shelvings" AS ENUM ('First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth');

-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('Admin', 'Researcher', 'LabTechnician', 'Nurse', 'ExternalPartner', 'IT', 'Guest');

-- CreateEnum
CREATE TYPE "DataMatrix81" AS ENUM ('A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9');

-- AlterEnum
ALTER TYPE "SampleType" ADD VALUE 'Marrow';

-- DropForeignKey
ALTER TABLE "Box" DROP CONSTRAINT "Box_freezersId_fkey";

-- DropForeignKey
ALTER TABLE "Box" DROP CONSTRAINT "Box_shelvingsId_fkey";

-- DropForeignKey
ALTER TABLE "Boxes" DROP CONSTRAINT "Boxes_ShelvingId_fkey";

-- DropForeignKey
ALTER TABLE "Projects" DROP CONSTRAINT "Projects_participantId_fkey";

-- DropForeignKey
ALTER TABLE "Samples" DROP CONSTRAINT "Samples_ProjectId_fkey";

-- DropForeignKey
ALTER TABLE "Samples" DROP CONSTRAINT "Samples_boxId_fkey";

-- DropForeignKey
ALTER TABLE "Samples" DROP CONSTRAINT "Samples_participantsId_fkey";

-- DropForeignKey
ALTER TABLE "Shelvings" DROP CONSTRAINT "Shelvings_FreezerId_fkey";

-- AlterTable
ALTER TABLE "Boxes" DROP COLUMN "ShelvingId",
ADD COLUMN     "Slots" "DataMatrix81" NOT NULL;

-- AlterTable
ALTER TABLE "Freezers" ADD COLUMN     "location" "FreezerLocations" NOT NULL,
ADD COLUMN     "shelvings" "Shelvings"[],
ADD COLUMN     "temperature" "Temperatures" NOT NULL;

-- AlterTable
ALTER TABLE "Projects" ADD COLUMN     "workflowId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Samples" DROP COLUMN "BoxId",
DROP COLUMN "FreezerId",
DROP COLUMN "ProjectId",
DROP COLUMN "ShelvingId",
DROP COLUMN "SlotId",
DROP COLUMN "boxId",
DROP COLUMN "participantsId",
ADD COLUMN     "Notes" TEXT,
ADD COLUMN     "Shelving" "Shelvings" NOT NULL,
ADD COLUMN     "participantId" INTEGER,
ADD COLUMN     "projectId" INTEGER NOT NULL,
ADD COLUMN     "slotId" "DataMatrix81" NOT NULL,
ADD COLUMN     "workflowsId" INTEGER,
DROP COLUMN "temperature",
ADD COLUMN     "temperature" "Temperatures" NOT NULL;

-- DropTable
DROP TABLE "Box";

-- DropTable
DROP TABLE "Participants";

-- DropTable
DROP TABLE "Shelvings";

-- DropEnum
DROP TYPE "Slots";

-- CreateTable
CREATE TABLE "Workflows" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Workflows_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Steps" (
    "id" SERIAL NOT NULL,
    "workflowId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "Steps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cohort" (
    "id" SERIAL NOT NULL,
    "participantId" INTEGER NOT NULL,
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

    CONSTRAINT "Cohort_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "type" "UserType" NOT NULL,
    "projectsId" INTEGER,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Projects_workflowId_key" ON "Projects"("workflowId");

-- AddForeignKey
ALTER TABLE "Workflows" ADD CONSTRAINT "Workflows_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_workflowId_fkey" FOREIGN KEY ("workflowId") REFERENCES "Workflows"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Cohort"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Samples" ADD CONSTRAINT "Samples_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Samples" ADD CONSTRAINT "Samples_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Cohort"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Samples" ADD CONSTRAINT "Samples_workflowsId_fkey" FOREIGN KEY ("workflowsId") REFERENCES "Workflows"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Steps" ADD CONSTRAINT "Steps_workflowId_fkey" FOREIGN KEY ("workflowId") REFERENCES "Workflows"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Steps" ADD CONSTRAINT "Steps_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_projectsId_fkey" FOREIGN KEY ("projectsId") REFERENCES "Projects"("id") ON DELETE SET NULL ON UPDATE CASCADE;
