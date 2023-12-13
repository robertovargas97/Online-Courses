class Rectangle {

    #area = 0

    constructor(width, heigh) {
        this.width = width;
        this.heigh = heigh;
        this.#area = width * heigh;
    }
}

const rectangle = new Rectangle(10, 15);
rectangle.area = 5;

console.log(rectangle);
