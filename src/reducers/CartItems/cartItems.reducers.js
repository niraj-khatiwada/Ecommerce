import {
  noDuplicate,
  filteredArray,
  addQuantity,
  subtractQuantity,
} from './cart.utils'

const INITIAL_CART_ITEMS = []

const CartItemsReducer = (state = INITIAL_CART_ITEMS, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return noDuplicate(state, action.payload)
    case 'REMOVE_FROM_CART':
      return filteredArray(state, action.payload)
    case 'ADD_QUANTITY':
      return addQuantity(state, action.payload)
    case 'SUBTRACT_QUANTITY':
      return subtractQuantity(state, action.payload)
    default:
      return state
  }
}

export const ToggleDropdownReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_DROPDOWN':
      return !state
    default:
      return state
  }
}

export default CartItemsReducer
