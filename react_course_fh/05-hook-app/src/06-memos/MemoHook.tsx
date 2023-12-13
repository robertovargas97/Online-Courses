import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationNumber = 100) => {
  for (let index = 0; index < iterationNumber; index++) {
    console.log("Goooooo");
  }

  return `${iterationNumber} iterations were done`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);

  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  const component = (
    <div className="text-center">
      <h1>
        Counter : <small>{counter}</small>
      </h1>

      <h4>{memorizedValue}</h4>

      <button onClick={() => increment()} className="btn btn-success">
        + 1
      </button>
      <button
        className="btn btn-outline-success"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );

  return component;
};
