import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './modalSlice.js';

const store = configureStore({
  reducer: {
    modalState: modalReducer,
  },
});

export default store;
