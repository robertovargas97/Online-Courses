import axios from "axios";
import { Pokemon } from '../interfaces/pokemon';

export const getPokemon = async (pokemonId: number | string): Promise<Pokemon> => {

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    const { data } = await axios.get<Pokemon>(url);

    return data;

}