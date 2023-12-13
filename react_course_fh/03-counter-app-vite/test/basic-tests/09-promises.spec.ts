import { getHeroByIdAsync } from "../../src/basic-tests/09-promises"


describe('Promises Test', () => {

    test('getHeroByIdAsync success', (done) => {
        const id = 1;
        const exepctedName = {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        };

        getHeroByIdAsync(id).then((hero) => {
            expect(hero).toEqual(exepctedName);
            done();
        });
    });


    test('getHeroByIdAsync error', (done) => {
        const id = 100;
        const expectedErrorMessage = `Hero with id ${id} was not found`;

        getHeroByIdAsync(id).catch((error) => {
            expect(error).toBe(expectedErrorMessage);
            done();
        });
    });

})