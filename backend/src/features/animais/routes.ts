export {};

const controllers = require('./controllers');

module.exports = router => {
    router.post('/pets', controllers.insertAnimal)
}