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

        if(user == 1){
            const message = {
                mensagem: "Senha redefinida"
            }
            response.send(message)
        }else{
            const error = {
                erro: "Deu ruim"
            }
            response.send(error)
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
    },

    async deleteUser(request: Request, response: Response){

        const{
            email,
            senha
        } = request.body

        const user = await model.deleteUser(email, senha);

        if( user == 1 ){
            const message = {
                sucesso: "Deu certo"
            }
            response.send(message)
        }else{
            const error = {
                erro: "deu ruim"
            }
            response.send(error)
        }
    }
}