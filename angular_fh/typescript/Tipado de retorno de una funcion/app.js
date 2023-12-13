"use strict";
(() => {
    const sume = (a, b) => {
        return a + b;
    };
    const name = () => 'Hellor Robert';
    const getSalary = () => {
        return new Promise((resolve, reject) => {
            resolve('Roberto');
        });
    };
    getSalary()
        .then(a => console.log(a.toUpperCase()));
})();
