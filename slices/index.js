import { configureStore } from '@reduxjs/toolkit';

import currencyRatesSlice from './currencyRatesSlice';
import modalReducer from './modalSlice.js';
import promoBannerReducer from './promoBannerSlice';

const store = configureStore({
  reducer: {
    modalState: modalReducer,
    promoBanner: promoBannerReducer,
    currencyRates: currencyRatesSlice,
  },
});

export default store;
