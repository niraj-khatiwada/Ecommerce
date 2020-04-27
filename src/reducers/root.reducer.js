import { combineReducers } from 'redux'
import userReducer from './user/user.reducer'
import CartReducer, {
  ToggleDropdownReducer,
} from './CartItems/cartItems.reducers'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: CartReducer,
  toggle: ToggleDropdownReducer,
})

export default persistReducer(persistConfig, rootReducer)
