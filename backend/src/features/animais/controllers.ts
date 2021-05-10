import * as Yup from 'yup';
const model = require('./model');

module.exports = {

    insertAnimal: async ctx => {
        const { request: {body}, response } = ctx
        console.log(body)
        
        const latitude = body.latitude;
        const longitude = body.longitude;
        const descricao = body.descricao;

        const animal = await model.insertAnimal(latitude, longitude, descricao);

        if(animal){
            response.body={
               mensagem: "Deu certo"
            }
        }else{
           console.log("ainda não")
        }

    }
}