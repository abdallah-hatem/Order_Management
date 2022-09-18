import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import i18next from "i18next";
import "./Services/i18n.jsx";


const root = ReactDOM.createRoot(document.getElementById('root'));
i18next.init({
  interpolation: { escapeValue: false },
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

