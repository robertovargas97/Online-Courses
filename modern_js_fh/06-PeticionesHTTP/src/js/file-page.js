import { uploadFile } from './http-provider';
const body = document.body;

let inputFile, imgPhoto;

const createInputFileHtml = () => {
    const html = `
<h1 class="mt-5"> Upload file </h1>

<hr>

<label>Select photo:</label> 
<input type="file" accept="image/*" >

<br>

<img id="photo" class="img-thumbnail" src"">
`;
    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild(div);

    inputFile = document.querySelector('input');
    imgPhoto = document.querySelector("#photo");

};

const events = () => {
    inputFile.addEventListener('change', async (event) => {
        const file = event.target.files[0];
        // console.log(file);
        const url = await uploadFile(file);
        console.log(url);
        imgPhoto.src = url;
    });
};


export const init = () => {

    createInputFileHtml();
    events();

};