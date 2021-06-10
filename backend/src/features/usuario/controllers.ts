import { Request, Response } from "express";

export {};
const model = require('./model');

export default{
    async create(request: Request, response: Response){

        const{
            nome,
            email,
            senha,
            endereco,
            cidade,
            estado,
            telefone
        } = request.body

        console.log(nome)

        const user = await model.createUser(nome, email, senha, endereco, cidade, estado, telefone);
        
        if(user){
            response.json({
                mensagem: "Usuário Cadastrado"
            })
            console.log('Usuário Cadastrado')
        }else{
            console.log('deu ruim')
        }
    },

    async redefine(request: Request, response: Response){
        
        const{
            email,
            senha
        } = request.body

        console.log(email)

        const user = await model.updatePassword(email, senha);

        if(user){
            response.json({
                mensagem: "Senha redefinida"
            })
        }else{
            console.log("Deu ruim")
        }
    },

    async listOne(request: Request, response: Response){

        const {
            id
        } = request.params;

        const [user] = await model.listOne(id);

        if(user){
            response.send(user)
        }
    }
}