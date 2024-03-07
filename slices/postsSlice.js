import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    categories: [],
    total: 0,
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
      state.categories = [...state.categories, action.payload];
    },
    removeCategory: (state, action) => {
      state.categories = state.categories.filter((category) => category !== action.payload);
    },
  },
});

export const { setPosts, addPosts, addCategory } = postsSlice.actions;
export default postsSlice.reducer;
