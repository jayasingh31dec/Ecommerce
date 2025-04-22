import React, { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';

function Women() {
  const [womenProducts, setWomenProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then(res => res.json())
      .then(data => setWomenProducts(data))
      .catch(err => console.error('Error fetching women products:', err));
  }, []);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Women's Collection</h2>
      <div className="row">
        {womenProducts.length > 0 ? (
          womenProducts.map(product => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center">Loading products...</p>
        )}
      </div>
    </div>
  );
}

export default Women;
