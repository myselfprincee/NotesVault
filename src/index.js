import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';


export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

);

reportWebVitals(console.log);