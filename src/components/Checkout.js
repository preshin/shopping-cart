import React, { useContext } from 'react';
import { StoreContext } from '../contexts/StoreContext';

const Checkout = () =>{
  const {cart, showModal} = useContext(StoreContext);
  return (
    <div className="row footer flex">
      <div className="col-3 col-s-1" />
      <div className="col-3 col-s-5" style={{backgroundColor: "pink", fontSize: 20, fontWeight: 700, color: "black"}}>
        <div>
          <span>Qty </span><span>{cart.quantity}</span>
        </div>
        <div>
          <span>Total </span><span>{cart.totalAmount}</span>
        </div>
      </div>
      <div className="col-3 col-s-5" style={{backgroundColor: "pink"}}>
        <button className="button" onClick={showModal}>Check Out</button>
      </div>
      <div className="col-3 col-s-1" />
    </div>
  );
}
  
  export default Checkout;