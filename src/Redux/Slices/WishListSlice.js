import {createSlice} from '@reduxjs/toolkit';

const WishListSlice = createSlice({
  name: 'wishList',
  initialState: {
    data: [],
  },

  reducers: {
    addItemToWishList(state, action) {
      let tempData = state.data;
      let isItemExit = false;
      tempData.map(item => {
        if (item.id === action.payload.id) {
          isItemExit = true;
        }
      });
      if (!isItemExit) {
        tempData.push(action.payload);
      }

      state.data = tempData;
      console.log('wishList');
    },
  },
});

export const {addItemToWishList} = WishListSlice.actions;
export default WishListSlice.reducer;
