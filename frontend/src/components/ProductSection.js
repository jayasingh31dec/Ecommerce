import React, { useEffect, useState } from 'react';
import ProductItem from "./ProductItem";

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle error state

  useEffect(() => {
    // Fetch products from API
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        setError('Error fetching products'); // Set error message in case of failure
        setLoading(false); // Set loading to false after error
        console.error('Error fetching products:', error);
      });
  }, []);

  if (loading) {
    return <p>Loading products...</p>; // Display loading text
  }

  if (error) {
    return <p>{error}</p>; // Display error message if there was an issue fetching products
  }

  return (
    <>
      {products.length > 0 ? (
        products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <p>No products available.</p> // Message if no products are available
      )}
    </>
  );
};

export default ProductSection;
