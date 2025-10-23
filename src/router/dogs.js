import express from 'express'
import ControllerDogs from '../controller/dogs.js'
// importar controller
//o objetivo da rota é disponibilizar o endpoint e jogar para o controller responsável 
//ctrl ; para comentar tudo

const router = express.Router()
// api/v1
router.get('/dogs', ControllerDogs.FindAll) //pegar todos
 router.get('/dogs/:index', ControllerDogs.FindOne) //pegar um
 router.post('/dogs', ControllerDogs.Create) //cadastrar um
 router.put('/dogs/:index',ControllerDogs.Update) //alterar um
 router.delete('/dogs/:index', ControllerDogs.Delete) //deletar um

export default router