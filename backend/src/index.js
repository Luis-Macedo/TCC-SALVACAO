const express = require('express');
var http = require('http');
const app = express();
const db = require('./database/connection');

const bodyParser = require('body-parser');

app.use(require('cors')());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post("/cadastro", function(req, res, next){
    
    console.log("cadastro recebido")
    var nome = req.body.name;
    var rg = req.body.rg;
    var email = req.body.name;
    var senha = req.body.passwd;

    (async () => {
        const user = await db.insertUsuario({nome: nome, rg: rg, email:email, senha: senha})
        console.log(user);
    })();

});

app.get("/", function(req, res, next){
    res.json({message: "Deu certo"})
});

var server = http.createServer(app);
server.listen(3001)