const express = require('express');
const buscarRegistrosControlador = require("./controladores/buscarRegistrosControlador");

const rotas = express.Router();

rotas.get('/teste', buscarRegistrosControlador.retornarRegistros);

module.exports = rotas;