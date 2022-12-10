import "./product.css";
import QuantityPicker from './quantityPicker';


function Product() {
    return (
        <div className="product">
            <img src="https://picsum.photos/200/200" alt=""></img>

           <h5>Product 1</h5>
           <label>$12.99</label>

           <QuantityPicker />

           <button>Add</button>
        </div>
    )
}

export default Product;