import { createSlice } from '@reduxjs/toolkit';

const promoBannerSlice = createSlice({
  name: 'promoBanner',
  initialState: {
    data: null,
  },
  reducers: {
    setPromoBanner: (state, action) => {
      state.data = action.payload[0];
    },
  },
});

export const { setPromoBanner } = promoBannerSlice.actions;
export default promoBannerSlice.reducer;
