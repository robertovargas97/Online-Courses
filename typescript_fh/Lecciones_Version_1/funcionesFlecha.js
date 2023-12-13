"use strict";
function suma2(a, b) {
    return a + b;
}
console.log(suma2(5, 7));
const sumaT = (a, b) => {
    return a + b;
};
console.log(sumaT(5, 3));
let captain = {
    name: "Hulk",
    giveOrder: function () {
        setTimeout(() => {
            console.log(this.name + " smash!!");
        }, 1000);
    }
};
captain.giveOrder();
