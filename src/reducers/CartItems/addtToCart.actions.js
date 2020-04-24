const addToCart = (item, amount, plusminus) => ({
  type: 'ADD_TO_CART',
  payload: {
    item,
    amount,
    plusminus,
  },
})

export default addToCart
