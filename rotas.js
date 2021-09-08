const express = require('express');
const fs = require('fs');
const path = require('path');
const agenda = require('./files/agenda.json');
const router = express.Router();

agenda.numeros = [];

router.get('/registrar', (req, res) => {
    const {nome, numero} = req.body;
    agenda.numeros.push({nome, numero});

    fs.writeFile(path.join(__dirname, '/files/agenda.json'), JSON.stringify(agenda, null, 4), err => {
        if(err) throw err;
    });
    res.send({message: 'Numero anotado!'});
});

module.exports = router;