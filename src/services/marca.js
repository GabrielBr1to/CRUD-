import modelmarca from "../models/marca.js";

const model = new modelmarca();

class ServiceMarca {
    adicionar(nome){
        if(!nome){
            throw new Error("Favor preencher o nome da marca")
        }
        model.adicionar(nome)
    }
}

export default new ServiceMarca();