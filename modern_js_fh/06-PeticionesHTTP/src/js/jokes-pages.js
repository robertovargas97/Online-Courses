import { getJoke } from "./http-provider";

const body = document.body;
let btnGetJoke, olJokes;

const createHTMLJoke = () => {

    const html = ` <h1 class="mt-5">Jokes</h1>
    <hr>
    <button id="btn-joke" class="btn btn-primary">Get Joke</button>

    <ol class="mt-4 list-group" >
        
    </ol>
    
    `;

    const jokeDiv = document.createElement('div');
    jokeDiv.innerHTML = html;
    body.append(jokeDiv);
};

const events = () => {

    btnGetJoke = document.querySelector("#btn-joke");
    olJokes = document.querySelector("ol");

    btnGetJoke.addEventListener('click', async () => {
        btnGetJoke.disabled = true;
        setJoke(await getJoke());
        btnGetJoke.disabled = false;
    });

};

const setJoke = (joke) => {
    const li = document.createElement('li');
    li.innerHTML = `<b>${joke.id}</b> : ${joke.value} `;
    li.classList.add('list-group-item');
    olJokes.append(li);
};


export const init = () => {
    createHTMLJoke();
    events();
};



