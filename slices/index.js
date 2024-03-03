import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './modalSlice.js';
import promoBannerReducer from './promoBannerSlice'

const store = configureStore({
  reducer: {
    modalState: modalReducer,
    promoBanner: promoBannerReducer,
  },
});

export default store;
