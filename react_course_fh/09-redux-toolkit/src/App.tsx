import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { decrement, increment, increment_by } from "./store/slices/counter";

function App() {
  const { counter } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  const incrementByValue = 15;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <h2> Count {counter}</h2>

      <div className="card">
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>

        <button
          style={{ marginLeft: "10px" }}
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>

        <button
          style={{ marginLeft: "10px" }}
          onClick={() => {
            dispatch(increment_by(incrementByValue));
          }}
        >
          Increment By {`${incrementByValue}`}
        </button>
      </div>
    </>
  );
}

export default App;
