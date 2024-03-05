import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDarkTheme: false, // добавляем состояние для отслеживания текущей темы
  },
  reducers: {
    toggleTheme(state) {
      state.isDarkTheme = !state.isDarkTheme; // переключаем состояние темы
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
