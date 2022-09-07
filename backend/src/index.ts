// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// async function main() {
//   const getAllSamples = await prisma.samples.findMany();
//   const getSampleById = await prisma.samples.findUnique({
//     where: {
//       id: 1,
//     },
//   });
//   return { getAllSamples, getSampleById };
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

// index.ts for prisma api client
require("dotenv").config();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const getAllSamples = await prisma.samples.findMany();
  // const getSampleById = await prisma.samples.findUnique({
  //   where: {
  //     id: 1,
  //   },
  // });
  console.log(getAllSamples);
  return { getAllSamples };
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
