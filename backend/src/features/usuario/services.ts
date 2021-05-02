export {};

const db = require('../../database/models')

module.exports = {
    create: payload => db.usuario.create(payload)
}