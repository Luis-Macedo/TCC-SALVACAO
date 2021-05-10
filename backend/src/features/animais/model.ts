const conexaoAnimal = require('../../database/connection');

async function insertAnimal(latitude, longitude, descricao){
    const conn = await conexaoAnimal.connect();

    const sql = 'INSERT INTO animais(latitude, longitude, descricao, data_relato) VALUES(?, ?, ?, CURRENT_DATE);'
    const values = [latitude, longitude, descricao];
    const rows = await conn.query(sql, values);
    return rows;
}

module.exports = {insertAnimal}