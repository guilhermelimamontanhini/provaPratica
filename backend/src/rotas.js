const express = require('express');
const pedidosControlador = require("./controladores/pedidosControlador");
const statusControlador = require("./controladores/statusControlador");
const vendasControlador = require("./controladores/vendasControlador");

const rotas = express.Router();

rotas.get('/pedidos', pedidosControlador.retornarRegistros);
rotas.get('/pedidos/resumoStatus', statusControlador.retornarResumoStatus);
rotas.get('/pedidos/totalVendas', vendasControlador.retornandoQuantidadeVendas);

module.exports = rotas;