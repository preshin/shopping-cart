import React, { Component } from 'react';
import Product from './Product';
import { StoreContext } from '../contexts/StoreContext';
class ProductsList extends Component {
  static contextType = StoreContext;

  componentDidMount(){
    fetch('http://localhost:5000/products', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
    .then((response) => response.json())
    .then((data) => {
      const productDatawithCount = data.map(product => ({...product, count: 0}))
    this.context.updateProductList(productDatawithCount)
    })
    .catch(err => {
      console.log("Error Reading data " + err);
    });
  }

  render() {
    const {productsList} = this.context
    return (
      <div style={{height: "90vh", overflow: "scroll"}}>
          {productsList && productsList.map(product=>
            <Product product={product} key={product.productId}/>
          )}
          </div>
     );
  }
}
 
export default ProductsList;