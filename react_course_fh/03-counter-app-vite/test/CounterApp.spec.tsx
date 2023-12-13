import { fireEvent, render, screen } from '@testing-library/react'
import { CounterApp } from '../src/CounterApp';


describe('<CounterApp> Test Cases Suit', () => {

    const initialValue = 100;

    test('should match with the snapshot', () => {
        const { container } = render(<CounterApp value={initialValue} />);
        // Allows to create a snapshot to make sure the component does not change
        expect(container).toMatchSnapshot();

    });

    test('should display the initial value as 100 inside a h2 tag', () => {
        render(<CounterApp value={initialValue} />);
        const expectedInitialValue: number = 100;
        const componentInitialValue: string = screen.getByTestId("initial-value").innerHTML;

        expect(componentInitialValue).toContain(expectedInitialValue.toString());

    });

    test('should increse with the button +1', () => {
        render(<CounterApp value={initialValue} />);
        const increaseButton = screen.getByTestId("button-increase");
        fireEvent.click(increaseButton)

        const expectedResult = initialValue + 1;
        const componentInitialValue: string = screen.getByTestId("initial-value").innerHTML;

        expect(componentInitialValue).toContain(expectedResult.toString());

    });

    test('should decrese with the button -1', () => {
        render(<CounterApp value={initialValue} />);
        const increaseButton = screen.getByTestId("button-decrease");
        fireEvent.click(increaseButton)

        const expectedResult = initialValue - 1;
        const componentInitialValue: string = screen.getByTestId("initial-value").innerHTML;

        expect(componentInitialValue).toContain(expectedResult.toString());

    });

    test('should reset with the button reset', () => {
        render(<CounterApp value={initialValue} />);

        // Triggers some events to increase the value
        const increaseButton = screen.getByTestId("button-increase");
        fireEvent.click(increaseButton);
        fireEvent.click(increaseButton);

        const expectedResult = initialValue + 2;
        const componentInitialValue: string = screen.getByTestId("initial-value").innerHTML;
        expect(componentInitialValue).toContain(expectedResult.toString());

        // Triggers the event to reset the value
        const resetButton = screen.getByTestId("button-reset");
        fireEvent.click(resetButton);

        const componentInitialValueAfterReset: string = screen.getByTestId("initial-value").innerHTML;
        expect(componentInitialValueAfterReset).toContain(initialValue.toString());

    });


});