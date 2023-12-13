import { useState } from 'react';

export const CounterApp = () => {
    const initialValue = {
        counter1: 10,
        counter2: 20,
        counter3: 30
    };

    const [state, setState] = useState(initialValue);
    const { counter1, counter2, counter3 } = state;

    const increaseValue = () => {
        const newStateValue = {
            ...state,
            counter1: counter1 + 1,
            counter2: counter2 + 1
        }
        setState(newStateValue);
    };

    const component =
        <>
            <h1>Counter : {counter1}</h1>
            <h1>Counter : {counter2}</h1>
            <h1>Counter : {counter3}</h1>
            <hr />

            <button className='btn btn-sm btn-primary' onClick={increaseValue}> +1 </button>
        </>

    return component
}
