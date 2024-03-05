import { configureStore } from '@reduxjs/toolkit';

import currencyRatesSlice from './currencyRatesSlice';
import modalReducer from './modalSlice.js';
import postsReducer from './postsSlice';
import promoBannerReducer from './promoBannerSlice';
import themeReducer from './themeSlice';

const store = configureStore({
  reducer: {
    modalState: modalReducer,
    promoBanner: promoBannerReducer,
    currencyRates: currencyRatesSlice,
    postsData: postsReducer,
    theme: themeReducer,
  },
});

export default store;
