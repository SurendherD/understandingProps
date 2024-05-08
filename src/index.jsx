import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DataComponent from './components/DataComponent';
import './App.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h2>Kalvium Gallery</h2>
   <DataComponent />
  </React.StrictMode>
);
