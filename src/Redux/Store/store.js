import {configureStore} from '@reduxjs/toolkit';
import ProductsReducer from '../Slices/ProductsSlice';
import WishListReducer from '../Slices/WishListSlice';
import CartReducer from '../Slices/CartSlice';
export const store = configureStore({
  reducer: {
    product: ProductsReducer,
    wishList: WishListReducer,
    cart: CartReducer,
  },
});
