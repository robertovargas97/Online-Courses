import React from 'react';
import ReactDOM from 'react-dom/client';

// import { HelloWorldApp } from './HelloWorldApp';
// import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';


// Import the styles globally
import "./styles.css"


// Root element
const root: HTMLElement = document.getElementById("root")!;

// Rendering the component
ReactDOM.createRoot(root).render(

    <React.StrictMode>
        {/* <HelloWorldApp /> */}

        {/* <FirstApp title='React Course' subTitle={123} /> */}

        <CounterApp value={1} />

    </React.StrictMode>

);
