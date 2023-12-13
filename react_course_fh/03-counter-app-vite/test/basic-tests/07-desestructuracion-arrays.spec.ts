import { returnArreglo } from "../../src/basic-tests/07-desestructuracion-array";

describe('Array Deses Test Suit', () => {

    test('Test for returnArray', () => {
        const [letters, numbers] = returnArreglo();

        const expectedLetters = "ABC";
        const expectedNumbers = 123;

        expect(letters).toEqual(expectedLetters);
        expect(numbers).toEqual(expectedNumbers);

    });


});