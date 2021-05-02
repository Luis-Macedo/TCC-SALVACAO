export {};

const Validator = require('fastest-validator')
const services = require("./services")
const Boom = require('boom')

const v = new Validator()

module.exports = {
    create: async ctx =>{
        const { request: {body}, response } = ctx
        const schema = {
           latitude: {max: 10, min: 10, type: 'decimal'},
           longitude: {max: 10, min: 10, type: 'decimal'}
        }
        const error = v.validate(body, schema)

        if(Array.isArray(error) && error.length){
            response.status = 400
            return response.body = Boom.badRequest(null, error)
        }
        const animal = await services.create(body)
        response.body = animal
    }
}