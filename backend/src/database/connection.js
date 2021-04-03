async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection
    
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection("mysql://root:MACEDO@localhost:3306/salvacao")
    console.log("conectado")
    global.connection = connection
    return connection;
}

async function insertUsuario(usuario){
    connection = await connect();
    const sql = 'INSERT INTO usuario(nome, rg, email, senha) VALUES (?, ?, ?, ?);';
    const values = [usuario.nome, usuario.rg, usuario.email, usuario.senha];
    return await connection.query(sql, values);
}

module.exports = {insertUsuario}