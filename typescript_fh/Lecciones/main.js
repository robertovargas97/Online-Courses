"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        let isValid = false;
        if (text.length > 3) {
            isValid = true;
        }
        return isValid;
    };
    Validations.validateDate = (fecha) => {
        return (isNaN(fecha.valueOf())) ? false : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText("Rob"));
//# sourceMappingURL=main.js.map