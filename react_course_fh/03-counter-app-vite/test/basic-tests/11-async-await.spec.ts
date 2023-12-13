import { getImageUrl } from "../../src/basic-tests/11-async-await";


describe('Async - Await tests', () => {

    test('getImageUrl should return image url', async () => {
        const url = await getImageUrl();
        expect(typeof url).toBe("string");
    });

    // test('getImageUrl should return error', async () => {
    //     const invalidApiKey = "123";
    //     const url = await getImageUrl(invalidApiKey);
    //     expect(typeof url).toBe(undefined);
    // });

});

