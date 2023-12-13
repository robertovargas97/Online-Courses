
function suma2(a, b) {
    return a + b;
}

console.log(suma2(5, 7));

const sumaT = (a: number, b: number): number => {
    return a + b;
}

console.log(sumaT(5, 3));


let captain: { name: string, giveOrder: () => void } = {
    name: "Hulk",
    giveOrder: function () {
        setTimeout(() => {

            console.log(this.name + " smash!!");
            
        }, 1000);
    }
};

captain.giveOrder();

