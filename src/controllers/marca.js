import Servicomarca from "../services/marca.js"

const servico = new Servicomarca();

class Controllermarca {
    adicionar(req,res){
        try {
            const marca = req.params.marca

            const result = servico.adicionar(marca)

            res.send({nome: result})
        } catch (error) {
            res.send({message:"erro ao adicionar um nome"});
        }
    }
}

export default new Controllermarca();