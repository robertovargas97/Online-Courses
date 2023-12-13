import { getPokemon } from "../generics/get-pokemon";

const pokemonId = 4;
getPokemon(pokemonId)
    .then(pokemon => console.log(pokemon.sprites.front_default))
    .catch(error => console.log(error))
    .finally(() => console.log("End"));