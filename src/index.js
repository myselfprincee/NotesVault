import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Loader from './components/Loader';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
import { Suspense } from 'react';


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
    <Suspense  fallback={<Loader/>}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
    </Suspense>
  </React.StrictMode>

);

reportWebVitals(console.log);