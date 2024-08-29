import { Router } from "express"

const personagensRoutes = Router()

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

  app.get("/personagens", (req, res) => {
    return res.status(200).send(personagens);
  });