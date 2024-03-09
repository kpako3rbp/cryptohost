import { configureStore } from '@reduxjs/toolkit';

import currencyRatesSlice from './currencyRatesSlice';
import modalReducer from './modalSlice.js';
import postsReducer from './postsSlice';
import promoBannerReducer from './promoBannerSlice';
import themeReducer from './themeSlice';
import activitiesReducer from './activitiesSlice';

const store = configureStore({
  reducer: {
    modalState: modalReducer,
    promoBanner: promoBannerReducer,
    currencyRates: currencyRatesSlice,
    postsData: postsReducer,
    activitiesData: activitiesReducer,
    theme: themeReducer,
  },
});

export default store;
