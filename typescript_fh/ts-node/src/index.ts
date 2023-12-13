import { Pokemon } from "./decorators/pokemon";

// (Pokemon.prototype as any).customName = "Pikachu";


// charmander.savePokemonToDb(50);

const charmander = new Pokemon("Charmander");
charmander.publicApi = "http://roberto.vargas";

console.log(charmander);