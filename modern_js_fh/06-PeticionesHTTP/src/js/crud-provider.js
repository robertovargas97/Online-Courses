const crudURL = 'https://reqres.in/api/users';

const getUser = async (id) => {


    const response = await fetch(`${crudURL}/${id}`);

    const { data } = await response.json();
    return data;
};

const createUser = async (user) => {


    const response = await fetch(crudURL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }

    });

    const data = await response.json();
    return data;
};

const updateUser = async (user, userId) => {


    const response = await fetch(`${crudURL}/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }

    });

    const data = await response.json();
    return data;
};


const deleteUser = async (userId) => {


    const response = await fetch(`${crudURL}/${userId}`, {
        method: 'DELETE',
    });

    return (response.ok) ? 'Done' : 'An error was occur';
};





export {
    getUser,
    createUser,
    updateUser,
    deleteUser
};