const db = require('../../database/models/index')

module.exports = {
    auth: payload => db.usuario.findOne({ where: payload })
}