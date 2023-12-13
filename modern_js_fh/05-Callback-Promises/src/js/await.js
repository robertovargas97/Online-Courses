import { searchHeroAsync, searchHero } from "./promises";



const heroesID = ['rob', 'mom', 'ala'];
const heroesPromises = heroesID.map((id) => searchHero(id));

export const getCharacterI = async () => {
    const members = [];

    for (const id of heroesID) {
        const member = await searchHero(id); //Espera hasta quese resuelve mi funcion y guardeme el resultado en una constante
        members.push(member);
    }

    return members;
};


//NO AWAIT EN CICLOS, USAR PROMISE.all(arregloDePromesas)
export const getCharacterII = async () => {
    const members = [];

    for (const id of heroesID) {
        members.push(searchHero(id));
    }

    return await Promise.all(members);
};

//NO AWAIT EN CICLOS, USAR PROMISE.all(arregloDePromesas)
export const getCharacter = async () => {
    return await Promise.all(heroesID.map((id) => searchHero(id)));
};

//MANEJO DE ERRORES EN AWAIT


export const getHeroAwait = async (id) => {

    try {
        const mem = await searchHeroAsync(id);
        return mem;
    }
    catch (error) {
        // return {
        //     name: "No name",
        //     age: 0
        // }
        throw error;
    }

};

export const heroesCicle = async () => {
    console.time('Hero');
    // const heroes = await Promise.all(heroesPromises);
    // heroes.forEach(heroe => console.log(heroe));

    for await (const heroe of heroesPromises) {
        console.log(heroe);
    }

    console.timeEnd('Hero');

};


export const heroIfAwait = async(id) => {

    if ( (await searchHeroAsync(id)).name === 'Alita') {
        console.log('Es alita');
    }
    else {
        console.log(':(');
    }

};

