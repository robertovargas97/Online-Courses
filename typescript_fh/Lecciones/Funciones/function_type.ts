(() => {

    const addNumbers = (number1: number, number2: number): number => number1 + number2

    const greet = (name: string): string => `Hola ${name}`;

    const saveTheWorld = () => `El mundo esta salvado`;



    const number1 = 4;
    const number2 = 12;
    const result: number = addNumbers(number1, number2);

    let myFunction: (x: number, y: number) => number;

    myFunction = addNumbers;
    console.log(myFunction(1, 2));

    let myFunction2: (x: string) => string;
    myFunction2 = greet;
    console.log(myFunction2("Roberto"));

    let myFunction3: () => string;
    myFunction3 = saveTheWorld;
    console.log(myFunction);


})();