(() => {

    const sume = (a: number, b: number): number => {
        return a + b;
    }

    const name = (): string => 'Hellor Robert';

    const getSalary = (): Promise<string> => {
        return new Promise((resolve, reject) => {
            resolve('Roberto');
        });

    }

    getSalary()
        .then(a => console.log(a.toUpperCase()));

})();

