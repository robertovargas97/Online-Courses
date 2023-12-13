import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";



describe('<AddCategory/> Test Cases Suit', () => {

    test('should change te value of the input', () => {

        const initialArray: string[] = ["One Punch Man"];
        const initialFunc = () => { };

        render(<AddCategory gifsCategories={initialArray} setGifsCategories={initialFunc} />)
        const formInput: HTMLInputElement = screen.getByTestId("form-input");
        const expectedText = "Saitama";
        fireEvent.input(formInput, { target: { value: expectedText } });
        expect(formInput.value).toBe(expectedText);

        // screen.debug();
    });

    test('should call the AddCategory method', () => {
        const inputValue = "Saitama";
        const initialArray: string[] = [];
        const initialFunc = jest.fn();

        render(<AddCategory gifsCategories={initialArray} setGifsCategories={initialFunc} />)

        // Fill the input
        const formInput: HTMLInputElement = screen.getByTestId("form-input");
        fireEvent.input(formInput, { target: { value: inputValue } });
        expect(formInput.value).toBe(inputValue);

        const form: HTMLFormElement = screen.getByTestId("form");
        fireEvent.submit(form);

        // After submitting the form the input shoul be empty
        expect(formInput.value).toBe("");

        // Checks if the given function was called
        expect(initialFunc).toHaveBeenCalled();
        expect(initialFunc).toHaveBeenCalledTimes(1);
        expect(initialFunc).toHaveBeenCalledWith([inputValue]);
    });

    test('should not call the AddCategory method', () => {
        const initialArray: string[] = [];
        const initialFunc = jest.fn();

        render(<AddCategory gifsCategories={initialArray} setGifsCategories={initialFunc} />)

        const form: HTMLFormElement = screen.getByTestId("form");
        fireEvent.submit(form);

        // Checks if the given function was not called
        expect(initialFunc).toHaveBeenCalledTimes(0);
    });

});