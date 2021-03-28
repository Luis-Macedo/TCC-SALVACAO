const express = require('express');
const app = express();




app.post("/cadastro", function(req, res){
    console.log("deu certo");
});

app.listen(3333, () =>{
    console.log("Serever tá on");
});