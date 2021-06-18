async function connect(){

    if(globalThis.connection && globalThis.connection.state !== 'disconnected'){
        return globalThis.connection;
    }
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:@localhost:3306/salvacao");
    console.log("Conectou no MySQL!");
    globalThis.connection = connection;
    return connection;
}

connect();

module.exports = {connect}