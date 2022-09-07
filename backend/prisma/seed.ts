import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const freezer1 = await prisma.freezers.create({
    where: { name: "Freezer 1" },
    update: {},
    create: {
      name: "Freezer 1",
      location: "Basement",
    },
  });
  const freezer2 = await prisma.freezers.create({
    where: { name: "Freezer 2" },
    update: {},
    create: {
      name: "Freezer 2",
      location: "Basement",
    },
  });
  const freezer3 = await prisma.freezers.create({
    where: { name: "Freezer 3" },
    update: {},
    create: {
      name: "Freezer 3",
      location: "Basement",
    },
  });
  const shelving1 = await prisma.shelvings.create({
    where: { name: "Shelving 1" },
    update: {},
    create: {
      name: "Shelving 1",
      location: "Basement",
      freezer: { connect: { id: freezer1.id } },
    },
  });
  const shelving2 = await prisma.shelvings.create({
    where: { name: "Shelving 2" },
    update: {},
    create: {
      name: "Shelving 2",
      location: "Basement",
      freezer: { connect: { id: freezer1.id } },
    },
  });
  const shelving3 = await prisma.shelvings.create({
    where: { name: "Shelving 3" },
    update: {},
    create: {
      name: "Shelving 3",
      location: "Basement",
      freezer: { connect: { id: freezer2.id } },
    },
  });
  const box1 = await prisma.boxes.create({
    where: { name: "Box 1" },
    update: {},
    create: {
      name: "Box 1",
      location: "Basement",
      shelving: { connect: { id: shelving1.id } },
    },
    slots: {
      create: [1 - 81].map((i) => ({
        name: `Slot ${i}`,
      })),
    },
  });
  const box2 = await prisma.boxes.create({
    where: { name: "Box 2" },
    update: {},
    create: {
      name: "Box 2",
      location: "Basement",
      shelving: { connect: { id: shelving2.id } },
    },
    slots: {
      create: [1 - 81].map((i) => ({
        name: `Slot ${i}`,
      })),
    },
  });
  const box3 = await prisma.boxes.create({
    where: { name: "Box 3" },
    update: {},
    create: {
      name: "Box 3",
      location: "Basement",
      shelving: { connect: { id: shelving3.id } },
    },
    slots: {
      create: [1 - 81].map((i) => ({
        name: `Slot ${i}`,
      })),
    },
  });
  const sample1 = await prisma.samples.create({
    where: { name: "Sample 1" },
    update: {},
    create: {
      name: "Sample 1",
      location: "Basement",
      box: { connect: { id: box1.id } },
    },
    slot: {
      connect: { id: box1.slots[0].id },
    },
  });
  const sample2 = await prisma.samples.create({
    where: { name: "Sample 2" },
    update: {},
    create: {
      name: "Sample 2",
      location: "Basement",
      box: { connect: { id: box2.id } },
    },
    slot: {
      connect: { id: box2.slots[1].id },
    },
  });
  const sample3 = await prisma.samples.create({
    where: { name: "Sample 3" },
    update: {},
    create: {
      name: "Sample 3",
      location: "Basement",
      box: { connect: { id: box3.id } },
    },
    slot: {
      connect: { id: box3.slots[2].id },
    },
  });
  const project1 = await prisma.projects.create({
    where: { name: "Project 1" },
    update: {},
    create: {
      name: "Project 1",
      type: "Trial",
      samples: {
        connect: [{ id: sample1.id }, { id: sample2.id }, { id: sample3.id }],
      },
    },
  });

  console.log({ freezer1, freezer2, freezer3 });
  console.log({ shelving1, shelving2, shelving3 });
  console.log({ box1, box2, box3 });
  console.log({ sample1, sample2, sample3 });
  console.log({ project1 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
