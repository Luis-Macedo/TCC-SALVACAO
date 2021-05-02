const db = require('../../database/models')

module.exports = {
    create: payload => db.animal.create(payload)
}