export const cartInitialState = JSON.parse(localStorage.getItem('cart')) || [] // LocalStorage get data :)
export const cartActions = {
  ADD_TO_CART: 'ADD_TO_CART',
  REDUCE_TO_CART: 'REDUCE_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAN_CART: 'CLEAN_CART'
}

// Update localStorage
export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state));
}

export const cartReducer = (state, action) => {

  const { type: actionType, payload: actionPayload } = action
  
  switch(actionType) {

    case cartActions.ADD_TO_CART: {

      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1

        updateLocalStorage(newState)
        return newState
      }

      const newState = [
        ... state,
        {
          ... actionPayload, // product
          quantity: 1
        }
      ]

      updateLocalStorage(newState)
      return newState

    }

    case cartActions.REDUCE_TO_CART: {

      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)

        if (newState[productInCartIndex].quantity > 1 ) {
          newState[productInCartIndex].quantity -= 1

          updateLocalStorage(newState)
          return newState
        }


        updateLocalStorage(newState)
        return newState

      }

      const newState = [
        ... state,
        {
          ... actionPayload, // product
          quantity: 1
        }
      ]

      updateLocalStorage(newState)
      return newState

    }

    case cartActions.REMOVE_FROM_CART: {

      const { id } = actionPayload
      const newState = state.filter(item  => item.id !== id)

      updateLocalStorage(newState)
      return newState

    }

    case cartActions.CLEAN_CART: {

      updateLocalStorage([])
      return []

    }

  }
  return state
  
}