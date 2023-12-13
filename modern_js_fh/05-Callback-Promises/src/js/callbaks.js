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


export const searchHero = (id, callback) => {
    const hero = heroes[id];

    if (hero) {
        callback(null,hero);
    }
    else {
        //Error
        callback(`Hero with id: ${id} does not exist`);
    }


   

};