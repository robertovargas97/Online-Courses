(() => {
    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    numbers.push(10);

    console.log(numbers);

    const villians = ["Omega Rojo", "Duende Verde"];

    villians.forEach(villian => console.log(villian.toUpperCase()));
    numbers.forEach(villian => console.log(villian));

})()