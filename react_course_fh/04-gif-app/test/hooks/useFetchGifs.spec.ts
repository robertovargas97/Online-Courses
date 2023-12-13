import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"
import 'whatwg-fetch'



describe('useFetchGifs hook tests', () => {


    test('should return the initial state : [] and isLoading', () => {

        const { result } = renderHook(() => {
            const category = "Dragon Ball";
            return useFetchGifs(category)
        });

        const { gifs, isLoading } = result.current;

        expect(gifs).toEqual([]);
        expect(isLoading).toBe(true);

    });


    test('should returnan array with images and is loading as false', async () => {

        const { result } = renderHook(() => {
            const category = "Dragon Ball";
            return useFetchGifs(category)
        });

        // Waits until the condition is reached
        await waitFor(
            () => expect(result.current.gifs.length).toBeGreaterThan(0)
        )

        const { gifs, isLoading } = result.current;

        expect(gifs.length).toBeGreaterThan(0);
        expect(isLoading).toBe(false);

    });

})