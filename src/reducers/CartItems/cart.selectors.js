import { createSelector } from 'reselect'

const selectCart = (state) => state.cart

export const selectCartArray = createSelector([selectCart], (cart) => cart)

export const selectCartItemQuantity = createSelector(
  [selectCartArray],
  (cart) =>
    cart.reduce((preVal, currVal) => {
      return preVal + currVal.quantity
    }, 0)
)
