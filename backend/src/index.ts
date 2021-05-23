export{};

import routes from './_config/routes';
const path = require('path');
const cors = require('cors');
const express = require('express')


const app = express();

console.log("App rodando")

app.use(cors())
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(routes);

//app.use(bodyParser()).use(router.routes()).use(router.allowedMethods())


app.listen(3001);
