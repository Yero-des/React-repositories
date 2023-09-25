import { useReducer } from "react"
import { cartReducer, cartInitialState, cartActions } from "../reducers/redCart"

export const useCartReducer = () => {
  
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product => dispatch({
    type: cartActions.ADD_TO_CART,
    payload: product
  })

  const reduceToCart = product => dispatch({
    type: cartActions.REDUCE_TO_CART,
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: cartActions.REMOVE_FROM_CART,
    payload: product
  })

  const clearCart = () => dispatch({
    type: cartActions.CLEAN_CART
  })

  return { 
    state,
    addToCart,
    reduceToCart,
    removeFromCart,
    clearCart
  }
}