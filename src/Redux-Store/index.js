import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice'
import errorModalReducer from './errorModal-slice'

const store = configureStore({
  reducer:{auth:authReducer,errorModal:errorModalReducer}
})


export default store;