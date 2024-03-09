import { createSlice } from '@reduxjs/toolkit';

const activitiesSlice = createSlice({
  name: 'posts',
  initialState: {
    activities: [],
    total: 0,
  },
  reducers: {
    setActivities: (state, action) => {
      state.activities = action.payload.activities;
      state.total = action.payload.total;
    },
    addActivities: (state, action) => {
      state.posts = [...state.activities, ...action.payload.activities];
      state.total = action.payload.total;
    },
  },
});

export const { setActivities, addActivities } = activitiesSlice.actions;
export default activitiesSlice.reducer;
