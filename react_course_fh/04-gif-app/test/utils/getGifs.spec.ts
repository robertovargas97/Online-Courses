import { getGifs, Gif } from "../../src/utils/getGifs"
//Import this so the test cases works
import 'whatwg-fetch' 


describe('GetGifs Test Cases Suite', () => {

    test('should return an array of gifs', async () => {
        const category: string = "Dragon Ball";
        const gifsAarray: Gif[] = await getGifs(category);
        const expectedGifElememt: Gif = {
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        }

        expect(gifsAarray.length).toBeGreaterThan(0);
        expect(gifsAarray[0]).toEqual(expectedGifElememt);
    });

})