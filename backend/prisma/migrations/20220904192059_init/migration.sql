-- CreateTable
CREATE TABLE "Samples" (
    "id" SERIAL NOT NULL,
    "ProjectId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "temperature" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "FreezerId" INTEGER NOT NULL,
    "ShelvingId" INTEGER NOT NULL,
    "BoxId" INTEGER NOT NULL,
    "SlotId" INTEGER NOT NULL,
    "OnLoan" BOOLEAN NOT NULL DEFAULT false,
    "LoanedTo" TEXT,
    "LoanedAt" TIMESTAMP(3),
    "QRCode" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "projectsId" INTEGER,
    "boxesId" INTEGER,

    CONSTRAINT "Samples_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Freezers" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Freezers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Boxes" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "freezersId" INTEGER,

    CONSTRAINT "Boxes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Samples" ADD CONSTRAINT "Samples_projectsId_fkey" FOREIGN KEY ("projectsId") REFERENCES "Projects"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Samples" ADD CONSTRAINT "Samples_boxesId_fkey" FOREIGN KEY ("boxesId") REFERENCES "Boxes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boxes" ADD CONSTRAINT "Boxes_freezersId_fkey" FOREIGN KEY ("freezersId") REFERENCES "Freezers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
