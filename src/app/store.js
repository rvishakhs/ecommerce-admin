import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../features/auth/authSlice"
import customerReducer from "../features/customers/customersSlice"
import productReducer from "../features/products/productSlice"
import blogReducer from "../features/blogs/blogSlice"
import brandReducer from "../features/brand/brandSlice"
import prodCategoryReducer from "../features/products/productCategorySlice"
import blogCategoryReducer from "../features/blogs/blogCategorySlice"
import colorReducer from "../features/colors/colorSlice"
import enquiryReducer from "../features/enquiry/enquirySlice"
import allOrdersReducer from "../features/Order/OrderSlice"
import imageUploadReducer from "../features/uploadImages/uploadimageSlice"
import createproductReducer from "../features/products/productCreateSlice"


export const store = configureStore({
  reducer: {
    auth : authReducer, 
    customer : customerReducer,
    product: productReducer,
    prodCategory : prodCategoryReducer,
    blogs : blogReducer,
    brand : brandReducer, 
    blogCategory : blogCategoryReducer,
    colors : colorReducer,
    enquiry : enquiryReducer,
    orders : allOrdersReducer, 
    imageupload : imageUploadReducer,
    createproduct : createproductReducer
  },
})