import express from "express";
import { myMiddleware } from "./middleware/my-middleware";

const PORT = 3333;

const app = express();
app.use(express.json());
// app.use(myMiddleware); Middleware Global

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const { page, limit } = req.query;

  res.send(`Produto ${id}, página ${page} de ${limit}`);
});

app.post("/products", myMiddleware, (req, res) => {
  const { name, price } = req.body;

  // res.send(`Produto ${name} custa ${price}`)
  res.status(201).json({ name, price, user_id: req.user_id });
});

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
