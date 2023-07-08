import { createSlice } from '@reduxjs/toolkit';

interface IProduct {
  status: boolean;
  priceRange: number;
}
const initialState: IProduct = {
  status: false,
  priceRange: 150,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    toggleState: (state) => {
      state.status = !state.status;
    },
    setPriceRenge: (state, action: PayloadAction<number>) => {
      state.priceRange = action.payload;
    },
  },
});
const { toggleState, priceRange } = productSlice.actions;

export default productSlice.reducer;
