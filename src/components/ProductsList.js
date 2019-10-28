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
      this.context.updateProductList(null)
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
          {!productsList && (
            <div className="no-data">
              <h2>No data to Load</h2>
              <p>Refresh page after sometime.</p>
            </div>
          )}
          </div>
     );
  }
}
 
export default ProductsList;