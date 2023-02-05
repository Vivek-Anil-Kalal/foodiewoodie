import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthContextProvider>
);

reportWebVitals();

/** ToDo 
 * 
 * TOAST -> Store, Order , MyOrders , Login , 
 * Payment gateway ->Order Details 
 * searchResult Page
 * jaimin Ka API Call -> HomePage
*/