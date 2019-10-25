import React, { useContext } from 'react';
import { StoreContext } from '../contexts/StoreContext';

const AddToCart = (props)=> {
  const { updateProductCount } = useContext(StoreContext);
  const roundButtonStyle = {
    backgroundColor: "#4CAF50",
    padding: "10px",
    borderRadius: "50%"
  }
  return (
    <div className="row flex">
      <div className="col-6">
        <button className="button" onClick={()=>updateProductCount(props.productId, "ADD_TO_CART")}>Add to Cart</button>
      </div>
      <div className="col-6">
        <div className="row flex">
          <div className="col-4">
          <button style={{...roundButtonStyle}} onClick={()=>updateProductCount(props.productId, "ADD")}>+</button>
          </div>
          <div className="col-4">{props.count}</div>
          <div className="col-4">
          <button style={{...roundButtonStyle}} onClick={()=>updateProductCount(props.productId, "SUB")}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToCart;