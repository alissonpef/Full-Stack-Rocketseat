import express from "express";

const PORT = 3333;
const app = express();

app.get("/product/:id", (req, res) => {
  const { id } = req.params;
  const { page, limit } = req.query;

  res.send(`Produto ${id}, página ${page} de ${limit}`);
});

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
