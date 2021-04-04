const controllers = require("./controllers")

module.exports = router => {
    router.post('/teste/user', controllers.create)
}