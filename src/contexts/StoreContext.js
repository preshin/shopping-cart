import React, { Component, createContext } from 'react';

export const StoreContext = createContext();

class StoreContextProvider extends Component {
  state = {
    productsList: [],
    cart: {
      totalAmount: 0,
      quantity: 0
    },
    displayModal: false
  }

  updateProductList = (productsList)=>{
    this.setState({productsList})
  }

  closeModal = () =>{
    this.setState({
      displayModal: false,
      productsList: this.state.productsList.map(product=>({...product, count: 0})),
      cart: {
        totalAmount: 0,
        quantity: 0
      }
    });
  }

  showModal= ()=>{
    if(this.state.cart.totalAmount > 0)
    this.setState({displayModal: true})
  }

  updateProductCount = (productId, updateText)=>{
    const updatedProductList = this.state.productsList.map(product=>{
      if((product.productId === productId) && updateText === "ADD"){
        return { ...product, count: product.count + 1 }
      }
      else if((product.productId === productId) && updateText === "ADD_TO_CART" && product.count === 0){
        return { ...product, count: product.count + 1 }
      }
      else if((product.productId === productId) && product.count > 0 && updateText === "SUB"){
        return { ...product, count: product.count - 1 }
      }
      return product;
    })
    this.calculateCheckout(updatedProductList);
    this.setState({productsList: updatedProductList });
  }

  calculateCheckout = (updatedProductList)=>{
    let totalAmount = 0;
    let quantity = 0;
    updatedProductList.forEach(product => {
      if(product.count > 0){
        totalAmount += product.count * product.mrf
        quantity+= product.count
      }
    });
    this.setState({cart:{ totalAmount, quantity }})
  }

  render() {
    return (
      <StoreContext.Provider value={{
          ...this.state,
          updateProductList: this.updateProductList,
          updateProductCount: this.updateProductCount,
          showModal: this.showModal,
          closeModal: this.closeModal
        }}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

export default StoreContextProvider;