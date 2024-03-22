import {configureStore} from '@reduxjs/toolkit';
import ProductsReducer from './ProductsSlice';
export const store = configureStore({
  reducer: {
    product: ProductsReducer,
  },
});
