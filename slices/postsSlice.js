import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    categories: [],
    total: 0,
    loaded: 0,
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
      state.total = action.payload.total;
    },
    addPosts: (state, action) => {
      state.posts = [...state.posts, ...action.payload.posts];
      state.total = action.payload.total;
    },
    addCategory: (state, action) => {
      if (state.categories.includes(action.payload)) {
        state.categories = state.categories.filter((category) => category !== action.payload);
      } else {
        state.categories = [...state.categories, action.payload];
      }
    },
    setLoadedCount: (state, action) => {
      state.loaded = action.payload;
    },
    removeCategory: (state, action) => {
      state.categories = state.categories.filter((category) => category !== action.payload);
    },
    setCategories: (state, action) => {
      state.categories = action.payload.length > 0 ? [action.payload] : [];
    },
  },
});

export const { setPosts, addPosts, addCategory, setCategories, removeCategory, setLoadedCount } = postsSlice.actions;
export default postsSlice.reducer;
