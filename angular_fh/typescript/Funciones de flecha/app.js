"use strict";
(function () {
    var myFunction = function a(a) {
        return a.toUpperCase();
    };
    var myAfunction = function (a) {
        return a.toUpperCase();
    };
    //Con una linea de codigo puedo retornar un valor, por ejemplo
    var myAfunction2 = function (a) { return a.toUpperCase(); };
    var nSume = function (a, b) {
        return a + b;
    };
    //Con una linea de codigo puedo retornar un valor, por ejemplo
    var aSume = function (a, b) { return a + b; };
    var hulk = {
        name: 'Hulk',
        smash: function () {
            var _this = this;
            setTimeout(function () {
                console.log(_this.name + " smash!!!!");
            }, 1000);
        }
    };
    hulk.smash();
})();
