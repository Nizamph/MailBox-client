import { createSlice } from "@reduxjs/toolkit";


const initialToken = localStorage.getItem("token")

const initialAuthToken = !!initialToken

const authSlice = createSlice({
  name:"authentication",
  initialState:{initialAuthToken,email:''},
  reducers:{
    login:(state,action) => {
      const idToken = action.payload.idToken
      state.initialAuthToken = idToken
      localStorage.setItem("token",idToken) 
    },
    logout:(state) => {
      state.initialAuthToken = null
      localStorage.removeItem("token")
      localStorage.removeItem("email")
    },
    email: (state,action) => {
      const email = action.payload.email
      state.email = email
      localStorage.setItem('email',email)
    }
  }
})

export default authSlice.reducer;

export const authAction = authSlice.actions