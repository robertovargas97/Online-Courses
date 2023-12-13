"use strict";
(function () {
    function getAge(age) {
        return age * 5 + 1;
    }
    var name = "Roberto";
    var age = 23;
    var last_name = "Vargas";
    var output = name + " " + last_name + " (" + getAge(age) + ")";
    console.log(output);
})();
