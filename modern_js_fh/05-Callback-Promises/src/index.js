// import { slowPromise, midPromise, fastPromise } from './js/promises';

// slowPromise.then((result) => {
//     console.log(result);
// });

// midPromise.then((result) => {
//     console.log(result);
// });

// fastPromise.then((result) => {
//     console.log(result);
// });


//Return the result of the promise that execute faster
// Promise.race([slowPromise, midPromise, fastPromise]).then(result => {

//     console.log(result);

// }).catch(error => {
//     console.warn(error);
// });

//---------------------------------------------------------------------------------

// //ASYNC
// import { searchHeroAsync, searchHero } from './js/promises';

// searchHero('rob').then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });

// searchHeroAsync('ala').then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });


// AWAIT
import { getCharacter, getHeroAwait, heroesCicle, heroIfAwait } from './js/await';

// console.time('time');

// getCharacter().then((result) => {
//     console.table(result);

//     console.timeEnd('time');
// });



////Manejo de errores await

// console.time('time');

// getHeroAwait('mo')
//     .then((result) => {
//         console.table(result);

//         console.timeEnd('time');
//     });


////For awair , if await

heroesCicle();

heroIfAwait('ala');