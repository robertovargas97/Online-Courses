import { GifApp } from './GifApp';
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import styles globally
import './styles/style.css';


const root: HTMLElement | null = document.getElementById('root');

ReactDOM.createRoot(root!).render(
  <React.StrictMode>

    <GifApp />

  </React.StrictMode>,
)
