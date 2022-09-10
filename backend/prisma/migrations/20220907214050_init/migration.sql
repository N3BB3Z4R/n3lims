/*
  Warnings:

  - You are about to alter the column `temperature` on the `Samples` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - Added the required column `location` to the `Shelvings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Samples" ALTER COLUMN "temperature" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Shelvings" ADD COLUMN     "location" TEXT NOT NULL;
