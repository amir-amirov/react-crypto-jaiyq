import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import CoinContextProvider from './context/CoinContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CoinContextProvider>
      <App />  
    </CoinContextProvider>
  </BrowserRouter>
);

