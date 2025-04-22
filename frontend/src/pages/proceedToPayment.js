import React from 'react';
import { Link } from 'react-router-dom';

function ProceedToPayment() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Proceed to Payment</h2>

      {/* Display order summary */}
      <div className="shadow p-4 mb-4">
        <h4>Order Summary</h4>
        <div className="d-flex justify-content-between">
          <p>Subtotal:</p>
          <p>$100.00</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Delivery Charges:</p>
          <p>$5.00</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Tax:</p>
          <p>$2.50</p>
        </div>
        <div className="d-flex justify-content-between border-top pt-2">
          <h5>Total:</h5>
          <h5>$107.50</h5>
        </div>
      </div>

      {/* Payment form */}
      <div className="shadow p-4">
        <h4>Payment Information</h4>
        <form>
          <div className="mb-3">
            <label htmlFor="cardNumber" className="form-label">
              Card Number
            </label>
            <input type="text" id="cardNumber" className="form-control" placeholder="Enter your card number" />
          </div>
          <div className="mb-3">
            <label htmlFor="expiryDate" className="form-label">
              Expiry Date
            </label>
            <input type="text" id="expiryDate" className="form-control" placeholder="MM/YY" />
          </div>
          <div className="mb-3">
            <label htmlFor="cvv" className="form-label">
              CVV
            </label>
            <input type="text" id="cvv" className="form-control" placeholder="Enter CVV" />
          </div>

          <div className="d-flex justify-content-between">
            <Link to="/cart" className="btn btn-secondary">Back to Cart</Link>
            <button type="submit" className="btn btn-success">Confirm Payment</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProceedToPayment;
