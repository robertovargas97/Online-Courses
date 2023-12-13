(() => {

    const hero = {
        name: "Iron Man",
        age: 40
    }

    hero.age = 50;

    const a: number = 10;
    let b: boolean;

    function sayHello(msg: string) {
        console.log({ msg })
    }

    const message = "This is a test";
    sayHello(message);
})()


