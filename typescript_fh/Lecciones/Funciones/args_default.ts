(() => {
    const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
        let name = `${firstName} ${lastName || ""}`

        if (upper) {
            name = name.toUpperCase();
        }

        return name;
    }

    const name: string = fullName("Tony", "Stark", true);
    console.log(name);


})();