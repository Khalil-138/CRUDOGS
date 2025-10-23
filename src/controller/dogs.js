import ServiceDogs from '../service/dogs.js'

class ControllerDogs {

 FindAll(_, res) {
    try { 
        const nomes = ServiceDogs.FindAll()
        res.status(200).send({ nomes })
        
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}
    FindOne(req, res) {
    try { 
        const index = req.params.index 


        const nome = ServiceDogs.FindOne(index)
        res.status(200).send({nome})
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}
    Create(req, res) {
    try { 
        console.log(req.body.nome)
        const nome = req.body.nome
        ServiceDogs.Create(nome)
        res.status(201).send()
        
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}
   Update(req, res) {
    try { 
        const index = req.params.index 
        const nome = req.body.nome
        ServiceDogs.Update(index, nome)
        res.status(200).send()
        
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}
   Delete(req, res) {
    try { 
        const index = req.params.index
        ServiceDogs.Delete(index)
        res.status(204).send(resultado)
        
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
   
   
    }
}
export default new ControllerDogs()