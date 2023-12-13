import { render, screen } from "@testing-library/react";
import { GifsGrid } from "../../src/components";
//Import this so the test cases works
import 'whatwg-fetch'
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


// Mock the desired function
jest.mock('../../src/hooks/useFetchGifs');

describe('<GifsGrid/> Test Suite', () => {
    const category = 'One Punch';

    test('should show the loading text ', () => {

        // Use the function as Jest Mock to be able to apply the Mock methods
        (useFetchGifs as jest.Mock).mockReturnValue({ gifs: [], isLoading: true });

        render(<GifsGrid category={category} />);
        const loadingText = screen.getByTestId("loading").innerHTML;

        expect(loadingText).toContain("Loading...");
        expect(screen.getByText(category)).toBeTruthy();
    });

    test('should display items when calling the UseFetchGifs hook', () => {
        const gifs = [{
            id: "abc",
            title: "Saitama",
            url: "http://test.com"
        },
        {
            id: "123",
            title: "Goku",
            url: "http://test2.com"
        }];        // Use the function as Jest Mock to be able to apply the Mock methods
        (useFetchGifs as jest.Mock).mockReturnValue({ gifs: gifs, isLoading: false });
        render(<GifsGrid category={category} />);
        expect(screen.getAllByRole("img").length).toBe(2);
    });


});