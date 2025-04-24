import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Payment from './components/payment';
import Wishlist from './components/Wishlist';
import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';
import Kids from './pages/Kids';
import AccessoriesProducts from './pages/AccessoriesProducts';
import CosmeticsProducts from './pages/CosmeticsProducts';
import Details from './pages/Details';
import CartDetails from './pages/cartedItems';
import ProceedToPayment from './pages/proceedToPayment';


import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

const App = () => {
  return (


   
    


    <div className="d-flex" style={{ minHeight: '100vh' }}>
      <Sidebar />
      <div className="flex-grow-1 bg-light p-4" style={{ overflowY: 'auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/accessories" element={<AccessoriesProducts />} />
          <Route path="/cosmetics" element={<CosmeticsProducts />} />
          <Route path="/details/:id" element={<Details />} />

          <Route path="/cart" element={<CartDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/proceed-to-payment" element={<ProceedToPayment />} />
          <Route path="/wishlist" element={<Wishlist/>} />


          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>




  );
};

export default App;

