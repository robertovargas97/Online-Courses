const heroes = {
    rob: {
        name: 'Rob',
        age: 24
    },

    mom: {
        name: 'Yuly',
        age: 43
    },
    ala: {
        name: 'Alita',
        age: 56
    }
};


export const searchHero = (id) => {
    const hero = heroes[id];
    
    return new Promise((resolve, reject) => {

        if (hero) {

            setTimeout(() => {
                resolve(hero);
            }, 1000);
        }
        else {
            reject(`Hero with id: ${id} does not exist`);
        }

    });

};

//ASYNC
//Take a normal function and transforms it into a function that returns a promises
export const searchHeroAsync = async (id) => {
    const hero = heroes[id];
    if (hero) {
        return hero;
    }
    else {
        throw Error(`Hero with id: ${id} does not exist`);
    }
};


const slowPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Slow promise');
    }, 2000);


});

const midPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Mid promise');
    }, 1500);


});

const fastPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Fast promise');
    }, 1000);
});

export {
    slowPromise,
    midPromise,
    fastPromise
};