import ModelDogs from "../model/dogs.js"


class ServiceDogs {

    FindAll() {
    
        return ModelDogs.FindAll()
    }
    FindOne(index) {
        //verificar se o index é valido 0, 1 ou 2 na posição do array
        return ModelDogs.FindOne(index)
    }
    Create(nome) {
        return ModelDogs.Create(nome)
    }
    Update(index, nome) {
         //verificar se o index é valido 0, 1 ou 2 na posição do array
        return  ModelDogs.Update(index, nome)
    }
    Delete(index) {
         //verificar se o index é valido 0, 1 ou 2 na posição do array

        return ModelDogs.Delete(index)
    }
}

export default new ServiceDogs()