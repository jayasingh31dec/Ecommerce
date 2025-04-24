

import React, { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';

function Kids() {
  const [kidsProducts, setKidsProducts] = useState([]);

  useEffect(() => {
    
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        
        const filtered = data.filter(
          item =>
            item.title.toLowerCase().includes('shirt') ||
            item.title.toLowerCase().includes('t-shirt') ||
            item.id === 3 || item.id === 8
        );
        setKidsProducts(filtered);
      })
      .catch(err => console.error('Error fetching kids products:', err));
  }, []);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Kids Collection</h2>
      <div className="row">
        {kidsProducts.length > 0 ? (
          kidsProducts.map(product => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center">Loading products...</p>
        )}
      </div>
    </div>
  );
}

export default Kids;
