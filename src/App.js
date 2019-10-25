import React from 'react';
import ProductsList from './components/ProductsList';
import StoreContextProvider from './contexts/StoreContext';
import Checkout from './components/Checkout';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
    <StoreContextProvider>
      <ProductsList />
      <Checkout />
      <Modal />
    </StoreContextProvider>
    </div>
  );
}

export default App;
