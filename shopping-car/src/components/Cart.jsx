import { useId } from "react";
import { CartIcon, AddToCartIcon, RemoveFromCartIcon, ClearCartIcon } from "./Icons";
import '../css/Cart.css'
import { useCart } from "../hooks/useCart";

const CartItem = ({ thumbnail, price, title, quantity, addToCart, reduceToCart}) => {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - ${price}
      </div>            
      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={reduceToCart} disabled={quantity < 2 ? true : false}>-</button>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export const Cart = () => {
  
  const cartCheckboxId = useId()
  const { cart, addToCart, reduceToCart, clearCart } = useCart()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon/>
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          
          {cart.map(product => (

            <CartItem 
              key={product.id} 
              addToCart={() => addToCart(product)}
              reduceToCart={() => reduceToCart(product)}
              { ... product}
            />

          ))} 

        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}