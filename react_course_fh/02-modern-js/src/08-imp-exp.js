// Default export is withuout the brackets
// import heroes, { owners } from "./data/heroes";
import heroes from "./data/heroes";

export const getHeroById = (id) => {
    return heroes.find((hero) => hero.id === id);
}

export const getHeroByOwner = (owner) => {
    return heroes.filter((hero) => hero.owner === owner);
}


// console.log(getHeroById(2));
// console.log(getHeroByOwner("DC"));
// console.log(heroes);