import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../features/auth/authSlice"
import customerReducer from "../features/customers/customersSlice"
import productReducer from "../features/products/productSlice"
import blogReducer from "../features/blogs/blogSlice"
import brandReducer from "../features/brand/brandSlice"



export const store = configureStore({
  reducer: {
    auth : authReducer, 
    customer : customerReducer,
    product: productReducer,
    blogs : blogReducer,
    brand : brandReducer, 
  },
})