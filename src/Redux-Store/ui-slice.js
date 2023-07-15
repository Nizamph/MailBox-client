import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    show: false,
    errorMessage: null,
    showStatus: false,
    statusMessage: null,
  },
  reducers: {
    showToggle: (state) => {
      state.show = !state.show;
    },
    errorMessage: (state, action) => {
      const errorMessage = action.payload.message;
      state.errorMessage = errorMessage;
    },
    statusNotificationToggle: (state) => {
      console.log('status notification running');
      state.showStatus = !state.showStatus;
      console.log(state.showStatus);
    },
    statusMessage: (state, action) => {
      state.statusMessage = action.payload.statusMessage;
      console.log('status message is here ', state.statusMessage);
    },
  },
});

export default uiSlice.reducer;

export const uiActions = uiSlice.actions;
