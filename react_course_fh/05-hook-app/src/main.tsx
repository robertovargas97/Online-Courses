import ReactDOM from "react-dom/client";
import "./index.css";
// import { MemoHook } from "./06-memos/MemoHook";
// import { HookApp } from './HookApp'
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterCustomHook } from './01-useState/CounterCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { CustomHookForm } from "./02-useEffect/CustomHookForm";
// import { MultipleCustomHook } from "./03-Examples/MultipleCustomHook";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Layout } from "./05-useLayoutEffect/Layout";
// import { Memorize } from "./06-memos/Memorize";
// import { CallBackHook } from './06-memos/CallBackHook';
// import { Padre } from "./07-tarea-memo/Padre";
// import "./08-useReducer/intro-reducer";

import { TodoApp } from "./08-useReducer/TodoApp";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    {/* <HookApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterCustomHook/> */}
    {/* <SimpleForm /> */}
    {/* <CustomHookForm /> */}
    {/* <MultipleCustomHook /> */}
    {/* <FocusScreen /> */}
    {/* <Layout /> */}
    {/* <Memorize /> */}
    {/* <MemoHook /> */}
    {/* <CallBackHook/> */}
    {/* <Padre /> */}
    <TodoApp />
  </>
);
