import { Router } from "express"

const personagensRoutes = Router()

let personagens = [
    {
      id: 100,
      nome: "Totoro",
      vivo: true,
      studio: "Studio Ghibli"
    },
  
    {
      id: 101,
      nome: "David Martinez",
      vivo: false,
      studio: "Trigger"
    },
  
    {
      id: 102,
      nome: "Batman",
      vivo: true,
      studio: "Warner Bros. Pictures"
    }
  ]

  personagensRoutes.get("/", (req, res) => {
    return res.status(200).send(personagens)
  });

personagensRoutes.post("/", (req, res) => {

  const {nome, vivo, studio} = req.body;
  const novoPersonagem = {
  id: personagens.length + 1,
  nome: nome,
  vivo: vivo,
  studio: studio,
  }

personagens.push(novoPersonagem)
return res.status(201)
.send(novoPersonagem)
});

personagensRoutes.delete("/:id", (req, res) => {
  const { id } = req.params;

  const personagem = personagens.find((person) => person.id == id );
  if(!personagem) {
    return res.status(404).send({
      message: "Personagem não encontrado!",
    });
  }

  personagens = personagens.filter((person) => person.id != id);

  return res.status(200).send({
    message: "Personagem Deletado!",
    personagem,
    });
  });


  export default personagensRoutes;