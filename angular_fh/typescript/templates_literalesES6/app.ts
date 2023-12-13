(function () {

    function getAge(age: number) {

        return age * 5 + 1;
    }

    const name = "Roberto";
    const age = 23;
    const last_name = "Vargas";

    const output = `${name} ${last_name} (${getAge(age)})`;

    console.log(output);


})();

