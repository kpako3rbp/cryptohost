import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    total: 0,
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
      state.total = action.payload.total;
    },
    addPosts: (state, action) => {
      state.posts = [...state.posts, ...action.payload.posts];
    },
  },
});

export const { setPosts, addPosts } = postsSlice.actions;
export default postsSlice.reducer;
