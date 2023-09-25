import { useContext } from "react";
import { CartContext } from "../context/cart";

export const useCart = () => {

  // Global state
  const { cart, addToCart, reduceToCart, removeFromCart, clearCart } = useContext(CartContext);

  // Good practice (usually)
  if (cart === undefined) {
    throw new Error('useCart must be used with a CartProvider'); // Don't exists provider global
  }

  return {    
    addToCart,
    reduceToCart,
    removeFromCart,
    clearCart,
    cart
  }
}
