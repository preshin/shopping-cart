import React from 'react';
import AddToCart from './AddToCart';

const Product = (props)=>{
  const {imageUrl, offerText, brandName, productName, price, mrf, quantity, count, productId} = props.product;
  return (
    <div className= "row flex">
      <div className="col-3 col-s-1" />
      <div className="col-3 col-s-5 align-center border-line">
        <div className="row">
          <div className="col-12 col-s-12">
            <img src={imageUrl} alt="product" />
          </div>
        </div>
        <div className="row">
        <div className="col-12 col-s-12">
          <div>{offerText} OFF</div>
        </div>
      </div>
      </div>
      <div className="col-3 col-s-5 align-left border-line" style={{margin: "auto"}}>
        <h2 style={{ color: "green" }}>{brandName}</h2>
        <p>{productName}</p>
        <div>{quantity}</div>
        <div>MRP {price}</div>
        <div style={{fontWeight: 700}}>Rs {mrf}</div>
        <AddToCart count={count} productId={productId} />
      </div>
      <div className="col-3 col-s-1" />
    </div>
  );
}

export default Product;