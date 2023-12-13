const day = 0;


const getDay = (day) => {
    switch (day) {
        case 0:
            console.log(`Today is Sun`);
            break;
        case 1:
            console.log(`Today is Mon`);
            break;

        case 6:
            console.log(`Today is Tue`);
            break;

        case 3:
            console.log(`Today is Wen`);
            break;

        case 4:
            console.log(`Today is Thu`);
            break;

        case 5:
            console.log(`Today is Fri`);
            break;

        case 6:
            console.log(`Today is Sat`);
            break;


        default:
            break;
    }
};

getDay(0);