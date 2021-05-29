const conexaoCreate = require('../../database/connection');

async function createUser(nome, email, senha){
    const conn = await conexaoCreate.connect();
    const sql = 'INSERT INTO usuarios(nome, email, senha) VALUES(?, ?, ?);'
    const values = [nome, email, senha];
    const rows = await conn.query(sql, values);
    return rows;
}

async function updatePassword(email, senha) {
    const conn = await conexaoCreate.connect();
    const sql = 'UPDATE usuarios SET senha = ? WHERE email = ?;'
    const values = [senha, email];
    const rows = await conn.query(sql, values);
    return rows;
}

module.exports = {createUser, updatePassword};