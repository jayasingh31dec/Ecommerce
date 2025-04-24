
import React, { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';

function CosmeticsProducts() {
  const [cosmeticsProducts, setCosmeticsProducts] = useState([]);

  useEffect(() => {
    
    fetch('https://fakestoreapi.com/products/category/jewelery')
      .then(res => res.json())
      .then(data => setCosmeticsProducts(data))
      .catch(err => console.error('Error fetching cosmetics products:', err));
  }, []);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Jewelry Collection</h2>
      <div className="row">
        {cosmeticsProducts.length > 0 ? (
          cosmeticsProducts.map(product => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center">Loading products...</p>
        )}
      </div>
    </div>
  );
}

export default CosmeticsProducts;
