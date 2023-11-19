import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Server from './Server';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Server />
  </React.StrictMode>
);
