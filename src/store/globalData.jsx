import DataContext from './dataContext';
import { useState } from 'react';

function GlobalData(props) {
  const [cart, setCart] = useState([]);
  const [fakeUser, setFakeUser] = useState({ name: 'Sergio' });

  function addProductToCart() {
    console.log("Global fn called");
  }

  function removeProductFromCart() {}

  return (
    <DataContext.Provider
      value={{
        cart: cart,
        user: fakeUser,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default GlobalData;
