// make the prisma queries separated from index.ts
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
