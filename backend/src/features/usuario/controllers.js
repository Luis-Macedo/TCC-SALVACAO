const Validator = require('fastest-validator')
const services = require("./services")
const Boom = require('boom')

const v = new Validator()

module.exports = {
    create: async ctx =>{
        const { request: {body}, response } = ctx
        const schema = {
           nome: {max: 60, min: 1, type: 'string'},
           email: {max: 60, min: 1, type: 'string'},
           senha: {max: 10, min: 1, type: 'string'}
        }
        const error = v.validate(body, schema)

        if(Array.isArray(error) && error.length){
            response.status = 400
            return response.body = Boom.badRequest(null, error)
        }
        const usuario = await services.create(body)
        response.body = usuario
    }
}