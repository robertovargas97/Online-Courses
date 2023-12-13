import './styles.css';

import { searchHero as searchHeroCallback } from './js/callbaks';
import { searchHero } from './js/promises';

let heroId = 'mom1', heroId2 = 'rob', heroId3 = 'ala';


//-----------------CALLBACK-----------------

// searchHero(heroId, (err, hero) => {

//     if (err) {
//         return console.error(err);
//     }

//     searchHero(heroId2, (err, hero2) => {

//         if (err) {
//             return console.error(err);
//         }

//         console.log(`${hero.name}  loves ${hero2.name}`);
//     });

// });


// -------------------PROMISE----------------

// searchHero(heroId).then(hero => {
//     console.log(hero.name);

//     searchHero(heroId2).then(hero2 => {
//         console.log(`${hero.name} loves ${hero2.name}`);

//     });

// });


Promise.all([searchHero(heroId), searchHero(heroId2)])
    .then(([hero, hero2]) => {
        console.log(`${hero.name} loves ${hero2.name}`);

    }).catch((err) => {
        alert(err);

    }).finally(() => {
        console.log(' Promise end');
    });
