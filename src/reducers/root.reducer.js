import { combineReducers } from 'redux'
import userReducer from './user/user.reducer'
import CartReducer, {
  ToggleDropdownReducer,
} from './CartItems/cartItems.reducers'

export default combineReducers({
  user: userReducer,
  cart: CartReducer,
  toggle: ToggleDropdownReducer,
})
