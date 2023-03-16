import { createSlice } from "@reduxjs/toolkit";

const emailSlice = createSlice({
  name:"email",
  initialState:{emailContent:[],recepientEmail:null,authorEmail:null,recipientData:[]},
  reducers:{
    addEmail:(state,action) => {
      state.emailContent = action.payload
    },
    recipientData:(state,action) => {
      state.recipientData = action.payload.recipientContent
    },
  }
})

export const emailActions = emailSlice.actions

export default emailSlice.reducer 