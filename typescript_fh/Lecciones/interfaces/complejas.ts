(() => {

    interface Client {
        name: string;
        age?: number;
        address: Address,
        getFullAdress(): void
    }

    interface Address {
        id: number,
        zip: string,
        city: string
    }


    const client: Client = {
        name: "Roberto",
        age: 26,
        address: {
            id: 125,
            zip: "1235",
            city: "Ottawa"
        },
        getFullAdress() {
            return `${this.address.city} - ${this.address.id}`;
        }
    }

    const client2: Client = {
        name: "Mari",
        age: 30,
        address: {
            id: 126,
            zip: "1234",
            city: "Ottawa"
        },
        getFullAdress() {
            return `${this.address.city} - ${this.address.id}`;
        }
    }

    console.log(client.getFullAdress());

})();