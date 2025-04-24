import React from 'react';
import { Link } from 'react-router-dom';
import { setCurrentProduct } from '../actions/setCurrentProduct';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { addToWishlist } from '../actions/wishlistActions';

const IconList = ({ product }) => {
  const dispatch = useDispatch();


  const handleProductClick = () => {
    dispatch(setCurrentProduct(product));
  };



  const handleShoppingBagClick = () => {
    dispatch(addToCart(product))
    alert('carted')
  };



  const handleHeartClick = () => {
    dispatch(addToWishlist(product));
    console.log("Added to wishlist:", product);
    alert('Added to Wishlist');
  };




  return (
    <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
      <li className="icon">
        <Link to={`/details/${product.id}`} onClick={handleProductClick}>

          <span className="fas fa-expand-arrows-alt"></span>
        </Link>
      </li>

      <li className="icon mx-3" onClick={handleHeartClick}>
        <span className="far fa-heart"></span>
      </li>

      <li className="icon" onClick={handleShoppingBagClick}>
        <span className="fas fa-shopping-bag"></span>
      </li>
    </ul>
  );
}

export default IconList;
