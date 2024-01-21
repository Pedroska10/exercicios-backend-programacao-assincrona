const { listarPokemons, detalharPokemon } = require("utils-playground");

const pokemons = async (req, res) => {
  const listaPokemons = await listarPokemons();

  return res.json(listaPokemons);
};
const pokemonPorId = async (req, res) => {
  const { idOuNome } = req.params;

  const pokemon = await detalharPokemon(idOuNome);

  const {
    id,
    name,
    height,
    weight,
    base_experiencen,
    forms,
    abilities,
    species,
  } = pokemon;

  return res.json({
    id,
    name,
    height,
    weight,
    base_experiencen,
    forms,
    abilities,
    species,
  });
};

module.exports = { pokemons, pokemonPorId };
