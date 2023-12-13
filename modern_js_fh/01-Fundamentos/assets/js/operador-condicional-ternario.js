// const day = 1;

// const actualTime = 9;


// let openTime;
// let message;

// if (day === 0 || day === 6) {

// if ([0, 6].includes(day)) {
//     openTime = 9;
// }
// else {
//     openTime = 11;
// }


// if (actualTime >= openTime) {
//     message = 'It is open';
// }
// else {
//     message = `It is closed, today we open at ${openTime}`;
// }

// openTime = ([0, 6].includes(day)) ? 9 : 11; // Igual que lo anterior

// message = (actualTime >= openTime) ? `It is open` : `It is closed,we open at ${openTime}`;

// console.log(message);


// PRO TIP


const maxNumber = (a, b) => (a > b) ? a : b;

const isMember = (member) => (member) ? `$2` : `$10`;

console.log(maxNumber(3, 5));
console.log(isMember(false));

const friend = true;

const friends = [
    'Yen',
    'Calamar',
    friend ? 'Lucia' : 'Nobody',
    maxNumber(5, 15),
];

console.log(friends);

const score = 95;
const grade = (score >= 95) ? `A+` :
    (score >= 90) ? `A` :
        (score >= 90) ? `B+` :
            (score >= 90) ? `B` : `F`;

console.log(grade);

