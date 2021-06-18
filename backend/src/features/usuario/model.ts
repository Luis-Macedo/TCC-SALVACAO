const conexaoCreate = require('../../database/connection');

async function createUser(nome, email, senha, endereco, cidade, estado, telefone){
    const conn = await conexaoCreate.connect();
    const sql = 'INSERT INTO usuarios(nome, email, senha, endereco, cidade, estado, telefone) VALUES(?, ?, ?, ?, ?, ?, ?);'
    const values = [nome, email, senha, endereco, cidade, estado, telefone];
    const rows = await conn.query(sql, values);
    return rows;
}

async function updatePassword(email, senha) {
    const conn = await conexaoCreate.connect();
    const sql = 'UPDATE usuarios SET senha = ? WHERE email = ?;'
    const values = [senha, email];
    const [rows] = await conn.query(sql, values);
    return rows.affectedRows;
}

async function listOne(id){
    const conn = await conexaoCreate.connect();
    const sql = 'SELECT * FROM usuarios WHERE id = ?;'
    const values = [id];
    const [rows] = await conn.query(sql, values);
    return rows;
}

async function deleteUser(email, senha){
    const conn = await conexaoCreate.connect();
    const sql = 'DELETE FROM usuarios WHERE email = ? AND senha = ?';
    const values = [email, senha];
    const [rows] = await conn.query(sql, values);
    return rows.affectedRows;
}

module.exports = {createUser, updatePassword, listOne, deleteUser};