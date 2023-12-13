import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  //   useCallback needs to be used with React.memo
  const incrementFather = useCallback((range: number) => {
    setCounter((value) => value + range);
  }, []);

  const component = (
    <div className="text-center">
      <h1>Use CallBack Hook {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFather} />
    </div>
  );
  return component;
};
