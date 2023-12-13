(() => {



    const withdrawMoney = (amount: number): Promise<number> => {

        let actualMoney = 1000;

        return new Promise((resolve, reject) => {

            if (amount > actualMoney) {
                reject('There are not enough money.');
            }
            else {
                actualMoney -= amount;
                resolve(actualMoney);
            }

        });



    }



    withdrawMoney(200)
        .then(actualAmount => console.log(`You have ${actualAmount} left.`))
        .catch(err => console.warn(err));

})();

