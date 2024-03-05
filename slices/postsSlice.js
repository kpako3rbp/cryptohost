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
  },
});

export const { setPosts } = postsSlice.actions;
export default postsSlice.reducer;
