import { Router, request, response, Request,Response} from "express";

import { getAlunos, saveAluno, getAluno, updateAluno, deleteAluno, finishedMatricula } from "./controller/AlunosController";

const routes = Router()

routes.get("/home", (request: Request, response: Response) =>{
    return response.json({message: "Hello Turma!" })
})

routes.get("/alunos", getAlunos)
routes.post("/aluno", saveAluno)
routes.get("/aluno/:id", getAluno)
routes.put("/aluno/:id", updateAluno)
routes.delete("/aluno/:id", deleteAluno)
routes.patch("/matricula/:id", finishedMatricula)



export default routes