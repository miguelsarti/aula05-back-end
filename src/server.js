import express from "express";
import { config } from "dotenv";

config();

const serverPort = process.env.PORT || 3000;

const app = express();
app.use(express.json());

const emocoes = [
  {
    id: 1,
    nome: "Nojinho",
    cor: "Verde"
  },

  {
    id: 2,
    nome: "Alegria",
    cor: "Amarelo"
  },

  {
    id: 3,
    nome: "Raiva",
    cor: "Vermelho"
  },
] 

const personagens = [
  {
    id: 100,
    nome: "Totoro",
    vivo: true
  },

  {
    id: 101,
    nome: "David Martinez",
    vivo: false
  },

  {
    id: 102,
    nome: "Batman",
    vivo: true  
  }
]

app.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello, World!" });
  });

  app.get("/2tds2", (req, res) => {
    return res.status(200).send({ message: "Hello, World!" });
  });

  app.post("/emocoes", (req, res) => {
    const {nome, cor} = req.body
    const newEmotion = {
      id: emocoes.length + 1,
      nome: nome,
      cor: cor
    }
    emocoes.push(newEmotion)
    return res.status(200).send(emocoes);
  });

  app.get("/personagens", (req, res) => {
    return res.status(200).send(personagens);
  });

app.listen(serverPort, () => {
  console.log(`⚡ Server started on http://localhost:${serverPort}`);
});