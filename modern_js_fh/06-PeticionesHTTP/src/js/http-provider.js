


const jokeURL = 'https://api.chucknorris.io/jokes/random';

const usersURL = 'https://reqres.in/api/users?page=2';

const cloudPreset = 'zdqiwbsd';

const cloudURL = 'https://api.cloudinary.com/v1_1/dswqbowk9/upload';

const getJoke = async () => {

    try {
        const response = await fetch(jokeURL);

        if (response.ok == false) {

            throw 'Request failed';
        }

        const { icon_url, id, value } = await response.json();

        return { icon_url, id, value };
    }
    catch (error) {
        throw error;
    }

};

const getUsers = async () => {
    const response = await fetch(usersURL);
    const { data: users } = await response.json();

    return users;
};

const uploadFile = async (file) => {

    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', file);

    try {

        const response = await fetch(cloudURL, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const cloudResponse = await response.json();

            return cloudResponse.secure_url;
        }
        else {
            throw await response.json();
        }

    }
    catch (error) {
        throw error;
    }



};



export {
    getJoke,
    getUsers,
    uploadFile
};

// fetch(jokeURL).then((answer) => {


//     answer.json().then((data) => {

//         console.log(data.id);
//         console.log(data.value);

//     });


// }).catch((error) => {
