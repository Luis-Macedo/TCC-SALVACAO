const controllers = require("./controllers")

module.exports = router => {
    router.post('/teste/animal', controllers.create)
}