/* Natives Libraries of React */
import React from 'react';
import ReactDOM from 'react-dom/client';

/* Apolo Libraries, Modules & Components */
import App from './app/App';
import './index.css';

/* External Libraries */
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


