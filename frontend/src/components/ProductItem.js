import React from 'react';
import IconList from './IconList';

const ProductItem = ({ product }) => {
  return (
    <div className="col-lg-3 col-sm-6 mb-4">
      <div className="product-item card h-100 shadow-sm"> 
        <div className="product position-relative"> 
          <img
            src={product.image}
            className="card-img-top img-fluid p-3"
            alt={product.title}
            style={{ height: '200px', objectFit: 'contain' }}
          />
          <span className="badge bg-danger position-absolute" style={{ top: '10px', left: '10px' }}>
            Sale
          </span>
          <IconList product={product} />
        </div>

        <div className="card-body d-flex flex-column">
          <h6 className="card-title text-truncate">{product.title}</h6>
          <div className="mt-2 mb-3">
            <span className="fas fa-star text-warning"></span>
            <span className="fas fa-star text-warning"></span>
            <span className="fas fa-star text-warning"></span>
            <span className="fas fa-star text-warning"></span>
            <span className="fas fa-star text-warning"></span>
          </div>
          <p className="card-text fw-bold mt-auto">$ {product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
