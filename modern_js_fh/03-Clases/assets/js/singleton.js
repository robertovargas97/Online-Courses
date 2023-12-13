//Singleton : An single instance of my class



class DataService {

    static instanceL //

    name = '';

    constructor(name = "") {

        // !undefined =  true
        // !!undefined = false

        // undefined === false , already exist an instance
        if (!!DataService.instance) {
            return DataService.instance;
        }


        DataService.instance = this;
        this.name = name;

        // return this;
    }


};


const dataService = new DataService('BD');
const dataService2 = new DataService('API');
const dataService3 = new DataService('SERVICE');

console.log(`Data Service name : ${dataService.name}`);
console.log(`Data Service name : ${dataService2.name}`);
console.log(`Data Service name : ${dataService3.name}`);