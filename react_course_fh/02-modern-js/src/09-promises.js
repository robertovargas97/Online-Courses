import { getHeroById } from "./08-imp-exp";



// const promise = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         const hero = getHeroById(2);
//         console.log(hero);
//         resolve(hero);
//         // reject("Not found");
//     }, 2000);

// });

// promise
//     .then((result) => {
//         console.log(`Promise Then: ${result.name}`);
//     })
//     .catch((error) => {
//         console.error(error);
//     });


const getHeroByIdAsync = (id) => {

    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            const hero = getHeroById(id);
            if (hero) {
                resolve(hero);
            }
            else {
                reject(`Hero with id ${id} was not found`);
            }

        }, 1000);

    });

    return promise;
}

const heroId = 3
getHeroByIdAsync(heroId)
    .then((hero) => {
        console.log(`The hero is ${hero.name}`);
    })
    .catch((error) => {
        console.error(error)
    });