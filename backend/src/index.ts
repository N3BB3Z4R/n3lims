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
// implement CORS
const cors = require("cors");
// const { express } = require("express");
const express = require("express");

const prisma = new PrismaClient();
const app = express();

// configure express server to use CORS
app.use(cors());
app.use(express.json());

app.get("/", (res) => {
  res.send({
    message: "Welcome to n3LIMS API",
    author: "Oscar Abad a.k.a. N3BB3Z4R",
    version: "0.0.1",
    description:
      "Laboratory, Projects and Sample Unit, Information Management System",
  });
});

app.get("/samples", async (req, res) => {
  const samples = await prisma.samples.findMany();
  res.json(samples);
});

app.get("/samples/:id", async (req, res) => {
  const { id } = req.params;
  const sample = await prisma.samples.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.json(sample);
});

app.post("/samples", async (req, res) => {
  const { name, description } = req.body;
  const sample = await prisma.samples.create({
    data: {
      name,
      description,
    },
  });
  res.json(sample);
});

app.put("/samples/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const sample = await prisma.samples.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      description,
    },
  });
  res.json(sample);
});

app.delete("/samples/:id", async (req, res) => {
  const { id } = req.params;
  const sample = await prisma.samples.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(sample);
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
// async function main() {
//   const getAllSamples = await prisma.samples.findMany();
//   // const getSampleById = await prisma.samples.findUnique({
//   //   where: {
//   //     id: 1,
//   //   },
//   // });
//   console.log(getAllSamples);
//   return { getAllSamples };
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
