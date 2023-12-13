(() => {
    let batman: string = "Batman";
    const superman: string = 'Superman';
    const flash: string = `Flash`;

    batman = batman.toUpperCase()

    console.log(`I'm ${batman}`)
    console.log(batman[10]?.toUpperCase() || "No está presente.")


})() 