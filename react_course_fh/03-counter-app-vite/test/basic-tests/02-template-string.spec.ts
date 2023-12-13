import { getGreet } from "../../src/basic-tests/02-template-string";


describe('Template String Tests', () => {

    test('getGreet : Should return Hello Roberto', () => {
        const name = "Roberto";
        const expectedResult = "Hello Roberto";

        const result = getGreet(name);

        expect(result).toBe(expectedResult)
    });

});