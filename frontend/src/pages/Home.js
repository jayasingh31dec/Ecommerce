import React from 'react';
import '../App.css';

import Navbar from '../components/Navbar';
import ProductSection from '../components/ProductSection'

import Carousel from '../components/slider';

function Home() {
  return (
    <>
      <div className="container-fluid bg-white mt-5 pt-3">
        <Navbar />
        <div className="row">
          <Carousel />
        </div>
      </div>

      <div className="container bg-white">
        <div className="row">
          <ProductSection />
        </div>
      </div>
    </>
  );
}

export default Home;
