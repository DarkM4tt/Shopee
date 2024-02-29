import { combineReducers, createStore } from 'redux'
import productsReducer from './slices/productsSlice'
import cartReducer, {
  addCartItem,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
} from './slices/cartSlice'
import wishListReducer, {
  addWishListItem,
  removeWishListItem,
} from './slices/wishListSlice'

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
})

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
)