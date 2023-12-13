import { getHeroById } from "./08-imp-exp";

export const getHeroByIdAsync = (id: number) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id);
            if (hero) {
                resolve(hero);
            } else {
                reject(`Hero with id ${id} was not found`);
            }
        }, 1000);
    });

    return promise;
};
