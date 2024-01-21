const express = require("express");
const { pokemons, pokemonPorId } = require("./controladores/pokemons");
const rotas = express();

rotas.get("/pokemon", pokemons);

rotas.get("/pokemon/:idOuNome", pokemonPorId);

module.exports = rotas;
