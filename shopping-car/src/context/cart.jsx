import { createContext, useReducer } from "react";
import { useCartReducer } from "../hooks/useCartReducer";

export const CartContext = createContext();

export const CartProvider = ({children}) => {  

  const { state, addToCart, removeFromCart, reduceToCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      reduceToCart,
      removeFromCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}