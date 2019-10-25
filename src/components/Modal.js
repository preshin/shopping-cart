import React, { useContext } from 'react';
import { StoreContext } from '../contexts/StoreContext';

const Modal = ()=>{
  const {displayModal, cart, closeModal} = useContext(StoreContext);
  return (
    <div id="myModal" className="modal" style={{display: displayModal? "block" : "none" }}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <p className="align-center">Total Amount: {cart.totalAmount}</p>
        <p className="align-center">Transaction Successful!!!</p>
      </div>
    </div>
  );
}

export default Modal;