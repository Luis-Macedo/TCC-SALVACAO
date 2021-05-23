import { Request, Response } from "express";

const Boom = require('boom');
const model = require('./model');

export default{
    async auth(request: Request, response: Response){

        const{
            email,
            senha
        } = request.body
        
        const [users] = await model.authUser(email, senha);
        
        if(users){
            return (
                response.json(
                    {
                        id: users.id,
                        email: users.email,
                        nome: users.nome
                    }
                )
            )
        }else{
            return
        }
    }
}