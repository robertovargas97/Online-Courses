class Plant {

    static objectConstructor({ color, leafs }) {
        return new Plant(leafs, color);
    }

    static arrayConstructor([color, leafs]) {
        return new Plant(leafs, color);
    }

    constructor(leafs, color = 'No color yet') {
        this.color = color;
        this.leafs = leafs;
    }

    printColor() {
        console.log(this.color);
    }


}

const tree = {
    color: 'brown and green',
    leafs: true
};

const gardenPlant = ['blue', false];



const red = 'Red';
const rose = new Plant(true, red);
const china = new Plant(true);
rose.printColor();
china.printColor();

const myTree = Plant.objectConstructor(tree);
myTree.printColor();
console.log('Leafs: ', myTree.leafs);

const myGardenTree = Plant.arrayConstructor(gardenPlant);
myGardenTree.printColor();
console.log('Leafs: ', myGardenTree.leafs);