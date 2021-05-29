import { Request, Response } from 'express';

const animalModel = require('./model');

export default{

    async create(request: Request, response: Response){

        const{
            latitude,
            longitude,
            titulo,
            descricao
        } = request.body

        //importando o nome da foto para colocar no banco de dados
        const requestImages = request.files as Express.Multer.File[];
        const [images] = requestImages.map(image => {
            return {path: image.filename}
        });

        //convertendo latitude e longitude 
        const TrueLatitude = parseFloat(latitude)
        const TrueLongitude = parseFloat(longitude)

        const animal = await animalModel.insertAnimal(TrueLatitude, TrueLongitude, titulo, descricao, images);

        if(animal){
            response.json({
                mensagem: "Cadastro do caso concuído"
            })
        }else{
            console.log("deu ruim")
        }
    },

    async list(request: Request, response: Response){

        const pets = await animalModel.getAnimais();
        response.send(pets)
    },

    async listOne(request: Request, response: Response){

        const {id} = request.params;

        const [pet] = await animalModel.getAnimal(id);

        pet.foto = `http://localhost:3001/uploads/${pet.foto}`
        console.log(pet)
        return response.json(pet)
    }
}