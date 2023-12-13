import { useState } from 'react';



interface counterAppPropTypes {
    value: number;
}

// type clickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;



export const CounterApp: React.FC<counterAppPropTypes> = ({ value }): JSX.Element => {

    const [counter, setCounter] = useState(value);

    const increaseValue = (): void => {
        setCounter(counter + 1);
        // setCounter((c) => c + 1)
    };

    const decreaseValue = (): void => {
        setCounter(counter - 1);
    };

    const resetValue = (): void => {
        setCounter(value);
    };

    const component: JSX.Element =
        <>
            <h1>Counter App</h1>
            <h2 data-testid="initial-value"> {counter} </h2>

            <button data-testid="button-increase" onClick={increaseValue}> +1 </button>
            <button data-testid="button-decrease" onClick={decreaseValue}> -1 </button>
            <button data-testid="button-reset" onClick={resetValue}> Reset </button>
        </>


    return component
}
