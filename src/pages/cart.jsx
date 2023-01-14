import { useContext } from 'react';
import DataContext from '../store/dataContext';
import "./cart.css";

function Cart() {
  const cart = useContext(DataContext).cart;

  return (
    <div className="cart">
      <h1>We have these products ready for you</h1>
      <h3>you have {cart.length} products in the cart</h3>

      {/* map every product into a div with: image, title, price, button to delete */}
      {cart.map((prod) => (
        <div className='prod-row'>
          <img src={'/images/' + prod.image} alt=""></img>

          <h6>{prod.title}</h6>

          <label>{prod.price}</label>

          <button className='btn btn-sm btn-danger'>delete</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
