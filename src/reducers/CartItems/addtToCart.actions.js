const addToCart = (id, item, count = 0, plusminus) => ({
  type: 'ADD_TO_CART',
  payload: {
    id,
    item,
    plusminus,
  },
  type: 'TOGGLE_DROPDOWN',
  payload: false,
})

export const toggleDropdown = () => ({
  type: 'TOGGLE_DROPDOWN',
})

export default addToCart
