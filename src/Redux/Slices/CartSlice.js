import {createSlice} from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: [],
  },

  reducers: {
    addItemToCart(state, action) {
      let tempData = state.data;
      let isItemExit = false;
      tempData.map(item => {
        if (item.id === action.payload.id) {
          isItemExit = true;
          item.qty = item.qty + 1;
        }
      });
      if (!isItemExit) {
        tempData.push(action.payload);
      }

      state.data = tempData;
      console.log('added to cart');
    },
    reduceItemfromCart(state, action) {
      let tempData = state.data;
      tempData.map(item => {
        if (item.id === action.payload.id) {
          item.qty = item.qty - 1;
        }
      });

      state.data = tempData;
      console.log(' remove from cart');
    },
    removeItemfromCart(state, action) {
      let tempData = state.data;
      tempData.splice(action.payload, 1);

      state.data = tempData;
      console.log(' remove from cart');
    },
  },
});

export const {addItemToCart, reduceItemfromCart, removeItemfromCart} =
  CartSlice.actions;
export default CartSlice.reducer;
