import React, { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';

function AccessoriesProducts() {
  const [accessoriesProducts, setAccessoriesProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then(res => res.json())
      .then(data => setAccessoriesProducts(data))
      .catch(err => console.error('Error fetching accessories products:', err));
  }, []);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Accessories Collection</h2>
      <div className="row">
        {accessoriesProducts.length > 0 ? (
          accessoriesProducts.map(product => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center">Loading products...</p>
        )}
      </div>
    </div>
  );
}

export default AccessoriesProducts;
