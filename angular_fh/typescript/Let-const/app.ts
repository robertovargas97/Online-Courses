(function () {

    let message = 'Hello'; //Puede usarse igual que var,pero se utiliza solo en el scope que se coloca y crea un nuevo espacio de memoria

    const message_2 = 'Hello'; //No permite que se cambie el valor

    

    if (true) {
       let message = 'World';
    }

    console.log(message);


})();

