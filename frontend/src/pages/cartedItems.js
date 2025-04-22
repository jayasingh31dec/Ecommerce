import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function CartDetails() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const cartCounter = useSelector(state => state.cart.cartCounter);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const deliveryCharges = useSelector(state => state.cart.deliveryCharges);
  const taxes = useSelector(state => state.cart.taxes);
  const grandTotal = useSelector(state => state.cart.grandTotal);

  // Helper function to format prices consistently
  const formatPrice = (price) => price.toFixed(2);

  return (
    <div className="container bg-white mt-5">
      <Navbar />

      {cartItems.length ? (
        <div className="row mt-5">
          <h3 className="border-bottom py-2 mb-3 mt-5">Shopping Cart</h3>

          <div className="col-md-8 shadow">
            <div className="row border-bottom py-3">
              <div className="col-md-9">Item</div>
              <div className="col-md-1">Cost</div>
              <div className="col-md-1">Qty</div>
              <div className="col-md-1">Total</div>
            </div>

            <div className="container border-right">
              {cartItems.map(item => (
                <div className="row border p-2 py-4" key={item.id}>
                  <div className="col-md-9 d-flex">
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                    />
                    <h6 className="ps-3">{item.title}</h6>
                  </div>

                  <div className="col-md-1">
                    <p className="text-end">{formatPrice(item.price)}</p>
                  </div>

                  <div className="col-md-1">
                    <p className="text-end">{item.quantity}</p>
                  </div>

                  <div className="col-md-1">
                    <p className="text-end">{formatPrice(item.total_item_price)}</p>
                  </div>
                </div>
              ))}

              <hr />

              <div className="row mb-2 py-3 pe-3">
                <div className="offset-md-9 col-md-1">
                  <h5 className="text-end">Total</h5>
                </div>

                <div className="col-md-1">
                  <h5 className="text-end">{cartCounter}</h5>
                </div>

                <div className="col-md-1">
                  <h5 className="text-end">{formatPrice(totalPrice)}</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="shadow p-2 mx-2 pb-5">
              <div className="d-flex justify-content-between px-2">
                <p>Sub Total</p>
                <p>{formatPrice(totalPrice)}</p>
              </div>

              <div className="d-flex justify-content-between px-2">
                <p>Delivery Charges</p>
                <p>{formatPrice(deliveryCharges)}</p>
              </div>

              <div className="d-flex justify-content-between px-2">
                <p>Tax</p>
                <p>{formatPrice(taxes)}</p>
              </div>

              <div className="d-flex justify-content-between px-2">
                <p>Total</p>
                <p>{formatPrice(grandTotal)}</p>
              </div>

              <Link className="float-end btn btn-success" to="/payment">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-center mt-5 pt-5">No Items in your Cart</h1>
      )}
    </div>
  );
}

export default CartDetails;
