import { createSlice } from "@reduxjs/toolkit";

const emailSlice = createSlice({
  name:"email",
  initialState:{emailContent:[],recepientEmail:null,authorEmail:null,recipientData:[]},
  reducers:{
    addEmail:(state,action) => {
      state.emailContent = action.payload
    },
    recipientEmail:(state,action) => {
       state.recepientEmail = action.payload.recipientEmail
    },
    authorEmail:(state, action) => {
       state.authorEmail = action.payload.authorEmail
    },
    replaceRecipientData:(state,action) => {
      state.recipientData = action.payload.recipientContent
    },
    replaceAuthorData:(state,action) => {
     state.emailContent = action.payload.authorContent
    }
  }
})

export const emailActions = emailSlice.actions

export default emailSlice.reducer 