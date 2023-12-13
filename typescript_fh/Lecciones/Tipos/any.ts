(() => {

    let avenger: any = "123";
    let power;

    console.log((avenger as string).charAt(0));
    power = 12;

    console.log((<number>power).toFixed(2));

})()