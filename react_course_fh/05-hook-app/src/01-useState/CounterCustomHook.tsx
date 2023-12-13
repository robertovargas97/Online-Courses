import { useCounter } from "../hooks/useCounter";
import { useState } from 'react';

export const CounterCustomHook = () => {

    type OnChangeFunctionType = (event: React.ChangeEvent<HTMLInputElement>) => void;

    const initialInputValue = "";
    const { counter, increment, decrement, reset } = useCounter();
    const [inputValue, setInputValue] = useState(initialInputValue);


    const onInputChange: OnChangeFunctionType = (event): void => {
        const data: string = event.target.value;
        setInputValue(data);
    }

    const resetValues = () => {
        reset();
        setInputValue(initialInputValue);
    }

    const component =
        <>
            <div className="text-center">
                <h1>
                    Custom Counter Hook: {counter}
                </h1>
                <hr />
                <input value={inputValue} onChange={onInputChange} id="input" className="form-control" type="number" placeholder="Set the amount for increment or decrement" />
                <br />
                <br />
                <button className="btn btn-md btn-success" onClick={() => increment(parseInt(inputValue) | 0)}>+1</button>
                <button className="btn btn-md btn-warning" onClick={resetValues}>Reset</button>
                <button className="btn btn-md btn-danger" onClick={() => decrement(2)}>-1</button>
            </div>

        </>

    return component;
}
