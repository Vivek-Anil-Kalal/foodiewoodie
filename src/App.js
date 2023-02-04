import './App.css';
import React from 'react';
import HomePage from './components/HomePage';
import MyOrders from './components/MyOrders';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/myorders' element={<MyOrders />} />
          {/* <Route path='/myorders' element={<myOrders />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
