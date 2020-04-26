const addToCart = (id, item, count = 0, plusminus) => ({
  type: 'ADD_TO_CART',
  payload: {
    id,
    item,
    plusminus,
  },
})

export const toggleDropdown = () => ({
  type: 'TOGGLE_DROPDOWN',
})

export default addToCart

export const removeFromCart = (item) => ({
  type: 'REMOVE_FROM_CART',
  payload: item,
})
