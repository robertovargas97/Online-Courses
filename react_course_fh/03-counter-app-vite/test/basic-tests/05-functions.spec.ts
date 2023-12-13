import { getActiveUser, getUser, User } from "../../src/basic-tests/05-functions";

describe('Functions Test Suit', () => {

    test('Test for getUser', () => {
        const expectedResult: User = { uid: "ABC123", username: "El_Papi05" };
        const result: User = getUser();
        expect(result).toEqual(expectedResult);
    });


    test('Test for agetActiveUser', () => {
        const username: string = "Roberteque";
        const expectedResult: User = { uid: "ABC123", username: username };
        const result: User = getActiveUser(username);
        expect(result).toEqual(expectedResult);
    });


});