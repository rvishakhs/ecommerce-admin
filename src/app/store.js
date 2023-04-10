import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../features/auth/authSlice"
import customerReducer from "../features/customers/customersSlice"


export const store = configureStore({
  reducer: {auth : authReducer , customer : customerReducer },
})