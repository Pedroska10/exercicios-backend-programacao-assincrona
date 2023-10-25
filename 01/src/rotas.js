const express = require("express");
const rotas = express();
const controladores = require("./controladores/control");

rotas.get("/produtos", controladores.listarProdutos);
rotas.get("/produtos/:idProduto", controladores.detalheProd);
rotas.get("/produtos/:idProduto/frete/:cep", controladores.frete);

module.exports = rotas;
