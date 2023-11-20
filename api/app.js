const express = require('express');

const app = express();

// criar um middleware para receber os dados da requisição

app.use(express.json());

// incluir as controllers 

const messages = require('./controllers/messages');

// criar as rotas

app.use('/mensagem', messages);

app.listen(3000, () =>{
  console.log('Servidor iniciado com sucesso :)');
});