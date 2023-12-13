"use strict";
console.log("wop wop wop");
let isGoku = false;
console.log(isGoku);
if (isGoku) {
    console.log("Kame ha me ha");
}
else {
    console.log("Bing bang attack");
}
let age = 0.5;
console.log(age);
let me = "Rob", mom = "Mami";
let concat = `${me} ${mom}`;
console.log(concat);
///ARRAYS
let array = [1, 2];
//Tuples
let hero = ['Dr. Strange', 100];
var Volume;
(function (Volume) {
    Volume[Volume["min"] = 0] = "min";
    Volume[Volume["mid"] = 1] = "mid";
    Volume[Volume["max"] = 2] = "max";
})(Volume || (Volume = {}));
let audio = Volume.min;
function none() {
    console.log('void');
}
//Cast
let anyValue = "Any";
let lenght = anyValue.length;
console.log(lenght);
let hero2 = "Flash";
const getHeroName = () => {
    return hero2;
};
