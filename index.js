const express = require('express');
const router = require('./rotas');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/agenda', router);

app.all('/', (re, res) => {
    res.send({message: 'ok'});
}).listen(3000);

console.log('App is running');