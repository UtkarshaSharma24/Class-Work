import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import App from './App';
import './index.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />   {/* <-- Add this */}
    <App />
  </React.StrictMode>
);
