import './styles.css';
import { getJoke, getUsers } from './js/http-provider';
// import { init } from './js/usuarios-page';
import * as CRUD from './js/crud-provider';
import { init } from './js/file-page';


// const jokeURL = 'https://api.chucknorris.io/jokes/random';

// fetch(jokeURL).then((answer) => {


//     answer.json().then((data) => {

//         console.log(data.id);
//         console.log(data.value);

//     });


// }).catch((error) => {

// });


//FORMA RESUMIDA
// const jokeURL = 'https://api.chucknorris.io/jokes/random';

// fetch(jokeURL).then((answer) => answer.json() ).then(ans => {
//     console.log(ans);
// });

// init();
// getUsers().then( (response) => {
//     console.log(response);
// });

// init();

// CRUD.getUser(1).then((response) => {
//     console.log(response);
// });

// CRUD.createUser({ name: 'Roberto', job: 'Programmer' })
//     .then((response) => {
//         console.log(response);
//     });

// CRUD.updateUser({ name: 'Cami', job: 'Programmer' }, 1)
//     .then((response) => {
//         console.log(response);
//     });

// CRUD.deleteUser(1)
//     .then((response) => {
//         console.log(response);
//     });


init();