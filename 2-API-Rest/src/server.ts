import express from "express";

const PORT = 3333;
const app = express();

app.get("/product/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Produto ${id}`);
});

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
