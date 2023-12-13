// Default export is withuout the brackets
// import heroes, { owners } from "./data/heroes";

import heroes from '../data/heroes';

export const getHeroById = (id: number) => {
    return heroes.find((hero) => hero.id === id);
}

export const getHeroByOwner = (owner: string) => {
    return heroes.filter((hero) => hero.owner === owner);
}
