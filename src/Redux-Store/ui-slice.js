import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name:"ui",
  initialState:{show:false,errorMessage:null,showStatus:false,statusMessage:null},
  reducers:{
    showToggle:(state) => {
       state.show = !state.show;
    },
    errorMessage:(state,action) => {
      const errorMessage = action.payload.message
      state.errorMessage = errorMessage
    },
    statusNotification:(state) => {
      state.showStatus = !state.showStatus
    },
    statusMessage:(state,action) => {
      state.statusMessage = action.payload.statusMessage
    }
  }

})

export default uiSlice.reducer;

export const uiActions = uiSlice.actions;
