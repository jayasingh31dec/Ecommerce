import React from 'react';
import { useSelector } from 'react-redux';
import ProductDetails from '../components/ProductDetails';
import Navbar from '../components/Navbar';

const Details = () => {
  // Retrieve the product from the Redux store
  let product = useSelector((state) => state.currentProduct.product);

  // If the product doesn't exist, you can show an error message or redirect
  if (!product) {
    return (
      <div className="container text-center mt-5">
        <h2>No product selected</h2>
        <p>Please select a product to view details.</p>
      </div>
    );
  }

  return (
    <>
      <div className="container-fluid">
        <Navbar />
      </div>

      <div className="container my-4">
        <h2 className="text-center mb-4">Product Details</h2>
        {/* Pass the product to ProductDetails component */}
        <ProductDetails product={product} />
      </div>
    </>
  );
};

export default Details;
