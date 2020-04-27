const addToCart = (id, item, count = 0, plusminus) => ({
  type: 'ADD_TO_CART',
  payload: {
    id,
    item,
  },
})

export const toggleDropdown = () => ({
  type: 'TOGGLE_DROPDOWN',
})

export const removeFromCart = (item) => ({
  type: 'REMOVE_FROM_CART',
  payload: item,
})

export const addQuantity = (item) => ({
  type: 'ADD_QUANTITY',
  payload: item,
})
export const subtractQuantity = (item) => ({
  type: 'SUBTRACT_QUANTITY',
  payload: item,
})

export default addToCart
