import React from 'react';

const Payment = () => {
  return (
    <div className="container">
      <h2 className="my-4">Payment Page</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="cardNumber" className="form-label">Card Number</label>
          <input type="text" className="form-control" id="cardNumber" placeholder="1234 5678 9012 3456" />
        </div>
        <div className="mb-3">
          <label htmlFor="expiry" className="form-label">Expiry Date</label>
          <input type="text" className="form-control" id="expiry" placeholder="MM/YY" />
        </div>
        <div className="mb-3">
          <label htmlFor="cvv" className="form-label">CVV</label>
          <input type="text" className="form-control" id="cvv" placeholder="123" />
        </div>
        <button type="submit" className="btn btn-success">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
