import { createSlice } from '@reduxjs/toolkit';

const activitiesSlice = createSlice({
  name: 'activities',
  initialState: {
    activities: [],
    total: 0,
    loaded: 0,
  },
  reducers: {
    setActivities: (state, action) => {
      state.activities = action.payload.activities;
      state.total = action.payload.total;
    },
    addActivities: (state, action) => {
      state.activities = [...state.activities, ...action.payload.activities];
      state.total = action.payload.total;
    },
    setLoadedCount: (state, action) => {
      state.loaded = action.payload;
    },
  },
});

export const { setActivities, addActivities, setLoadedCount } = activitiesSlice.actions;
export default activitiesSlice.reducer;
