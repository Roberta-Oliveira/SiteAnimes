{/*const path = require('path');
const express = require('express');

const app = express();


app.use(express.json());

app.post('/contatos',(req, res, next) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const mensagem = req.body.mensagem;

    require('./services/mailService')(email, nome, mensagem)
    .then(response => res.json(response))
    .cath(error => res.status(500).json(error));

})

app.use(express.static(path.join(__dirname,'build')));

app.listen(3000, () => {
    console.log('server start');
})*/}