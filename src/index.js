import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app';
import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-svg.css';
import './assets/css/soft-ui-dashboard.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
