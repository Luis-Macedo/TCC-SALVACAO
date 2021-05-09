const services = require('./services');
const Boom = require('boom')
const Validator = require('fastest-validator');
const jwt = require('jsonwebtoken')

const v = new Validator()

module.exports = {
    auth: async ctx => {
        const { request: {body}, response } = ctx
        const schema = {
            email: {max: 60, min: 1, type: 'string'},
            senha: {max: 10, min: 1, type: 'string'}
        }
        const error = v.validate(body, schema)
 
        if(Array.isArray(error) && error.length){
            response.status = 400
            return response.body = Boom.badRequest(null, error)
        }
        const usuario = await services.auth(body)
        if(usuario){
            response.body = {
                result: jwt.sign({ email: usuario.email }, `segredo`),
                email: usuario.email,
                id: usuario.id,
                nome: usuario.nome
            }
        }else{
            response.status = 401
            response.body = {result: Boom.unauthorized()}
        }
    }
}