import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/auth/login", (req, res) => {
  const { user, password } = req.body;

  if (user === "admin" && password === "1234") {
    const fakeToken = "FAKE_BEARER_TOKEN_123456";
    return res.json({ token: fakeToken });
  }

  return res.status(401).json({ message: "Usuário ou senha inválidos" });
});

function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token ausente ou inválido" });
  }

  const token = authHeader.split(" ")[1];
  if (token !== "FAKE_BEARER_TOKEN_123456") {
    return res.status(403).json({ message: "Token inválido" });
  }

  next();
}

app.get("/orders", authMiddleware, (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data/orders.json", "utf8"));
  res.json(data);
});

app.get("/orders/:id", authMiddleware, (req, res) => {
  const { id } = req.params;
  const data = JSON.parse(fs.readFileSync("./data/orders.json", "utf8"));

  const order = data.ListPedido.find((order) => String(order.idPedido) === id);

  if (!order) {
    return res.status(404).json({ message: "Pedido não encontrado" });
  }

  const detailedOrder = {
    DetailPedido: [
      {
        item: order.idPedido || "teste",
        descricao: order.descricao || "teste de descrição",
        quantidade: order.quantidade || 0,
        vlUnitario: order.vlUnitario || 0,
        vlTotal: order.vlTotal || 0,
        tabela: "01",
        operacao: "01",
        dtEntrega: "07/10/2025",
        comissao: 0,
        df: 0,
        icms: 0,
        pis: 0,
        confins: 0,
        rentabilidade: 0,
        descontoTabela: 0,
      },
    ],
  };

  res.json(detailedOrder);
});

app.get("/orders/:id/approve", authMiddleware, (req, res) => {
  const { id } = req.params;
  res.json({ message: `Pedido ${id} aprovado com sucesso!` });
});

app.get("/orders/:id/deny", authMiddleware, (req, res) => {
  const { id } = req.params;
  res.json({ message: `Pedido ${id} negado com sucesso!` });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Fake API rodando em http://localhost:${PORT}`);
});
