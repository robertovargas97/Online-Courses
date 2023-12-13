(() => {

    //SIRVEN PARA EJECUTAR UN CODIGO SIN BLOQUEAR OTRO

    console.log('Start');


    const prom1 = new Promise((resolve, reject) => {

        setTimeout(() => {
            reject('Timeout ended');
        }, 1000);

    });


    prom1
        .then(message => console.log(message))
        .catch(err => console.warn(err));

    console.log('End')

})();

