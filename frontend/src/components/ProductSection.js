import React, { useEffect, useState } from 'react';
import ProductItem from "./ProductItem";

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
   
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false); 
      })
      .catch(error => {
        setError('Error fetching products'); 
        setLoading(false); 
        console.error('Error fetching products:', error);
      });
  }, []);

  if (loading) {
    return <p>Loading products...</p>; 
  }

  if (error) {
    return <p>{error}</p>; 
  }

  return (
    
    <div className="row">
      {products.length > 0 ? (
        products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <p>No products available.</p> 
      )}
    </div>
  );
};

export default ProductSection;