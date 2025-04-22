import React, { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';

function Men() {
  const [menProducts, setMenProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then(res => res.json())
      .then(data => setMenProducts(data))
      .catch(err => console.error('Error fetching men products:', err));
  }, []);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Men's Collection</h2>
      <div className="row">
        {menProducts.length > 0 ? (
          menProducts.map(product => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center">Loading products...</p>
        )}
      </div>
    </div>
  );
}

export default Men;
