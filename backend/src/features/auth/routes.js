const controllers = require('./controllers')

module.exports = router => {
    router.post('/teste', controllers.auth)
}