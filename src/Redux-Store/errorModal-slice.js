import { createSlice } from "@reduxjs/toolkit";

const errorModalSlice = createSlice({
  name:"errorModal",
  initialState:{show:false,errorMessage:''},
  reducers:{
    onShow:(state) => {
       state.show = true;
    },
    errorMessage:(state,action) => {
      const errorMessage = action.payload.message
      state.errorMessage = errorMessage
    },
    onClose: (state) =>{
      state.show = false
    }
  }

})

export default errorModalSlice.reducer;

export const errorModalActions = errorModalSlice.actions;
