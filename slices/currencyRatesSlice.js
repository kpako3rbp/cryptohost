import { createSlice } from '@reduxjs/toolkit';

export const currencyRatesSlice = createSlice({
  name: 'currencyRates',
  initialState: {
    rates: null,
    updateTime: null,
  },
  reducers: {
    updateRates(state, action) {
      state.rates = action.payload;
    },
    updateResponseTime(state, action) {
      state.updateTime = action.payload;
    },
  },
});

export const { updateRates, updateResponseTime } = currencyRatesSlice.actions;
export default currencyRatesSlice.reducer;
