const authRoutes = require('../features/auth/routes');
const userRoutes = require('../features/usuario/routes');

module.exports = router =>{
    authRoutes(router)
    userRoutes(router)
}