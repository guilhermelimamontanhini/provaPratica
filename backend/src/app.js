const express = require('express');
const cors = require('cors');
const rotas = require("./rotas");
const app = express();

// Configurações do CORS
const opcoesCors = {
    origin: 'http://localhost:3000', 
    methods: 'GET',
    optionsSuccessStatus: 204
  };
// Habilitando o CORS
app.use(cors(opcoesCors));

app.use(rotas);

module.exports = app;