import { getHeroById, getHeroByOwner } from "../../src/basic-tests/08-imp-exp";


describe('Imp / Exp Test Suit', () => {

    test('getHeroById exists', () => {
        const idToSearch = 2;
        const expectedResult = {
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        };
        const hero = getHeroById(idToSearch);
        expect(hero).toEqual(expectedResult);
    });


    test('getHeroById not exists', () => {
        const idToSearch = 200;
        const expectedResult = undefined
        const hero = getHeroById(idToSearch);
        expect(hero).toEqual(expectedResult);
    });


    test('getHeroByOwner', () => {
        const expectedResult = [{
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        },
        {
            id: 5,
            name: 'Wolverine',
            owner: 'Marvel'
        }];

        const owner = "Marvel";
        const heroresByOwner = getHeroByOwner(owner);
        const expectedNumberOfHeroes = 2;

        expect(heroresByOwner.length).toBe(expectedNumberOfHeroes);
        expect(heroresByOwner).toEqual(expectedResult);

        for (const hero of heroresByOwner) {
            expect(hero.owner).toBe(owner);
        }

    });


});