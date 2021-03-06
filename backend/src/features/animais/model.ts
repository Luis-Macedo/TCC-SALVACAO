const conexaoAnimal = require('../../database/connection');

async function insertAnimal(latitude, longitude, titulo, descricao, foto){
    const conn = await conexaoAnimal.connect();

    const sql = 'INSERT INTO animais(latitude, longitude, titulo, descricao, foto, data_relato) VALUES(?, ?, ?, ?, ?, CURRENT_DATE);'
    const values = [latitude, longitude, titulo, descricao, foto.path];
    const rows = await conn.query(sql, values);
    return rows;
}

async function getAnimais(){
    const conn = await conexaoAnimal.connect();

    const sql = 'SELECT * FROM animais';
    const [rows] = await conn.query(sql);
    return rows;
}

async function getAnimal(id){

    const conn = await conexaoAnimal.connect();

    const sql = 'SELECT * FROM animais WHERE id = ?';
    const values = [id]
    const [rows] = await conn.query(sql, values);
    return rows;
}

module.exports = {insertAnimal, getAnimais, getAnimal};