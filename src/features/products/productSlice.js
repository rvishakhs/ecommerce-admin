import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";



// Initial States

const initialState = {
    product : [],
    isLoading : false ,
    isError : false,
    isSucess : false,
    message : ""
}

// Getting all products
export const getProducts = createAsyncThunk("product/getproducts", async (thunkAPI)=>{
    try {
         return await productService.getProducts()
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})
// Create a new product
// export const addProducts = createAsyncThunk("product/create-products", async (values, thunkAPI)=>{
//     try {
//          return await productService.createProduct(values)
//     } catch (err) {
//         return thunkAPI.rejectWithValue(err)

//     }
// })


export const productSlice = createSlice({
    name : "products",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.product = action.payload;

        })
        .addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        })
        // .addCase(addProducts.pending, (state) => {
        //     state.isLoading = true;
        // })
        // .addCase(addProducts.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.isSucess = true;
        //     state.isError = false;
        //     state.createdproduct = action.payload;
        // })
        // .addCase(addProducts.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isSucess = false;
        //     state.isError = true;
        //     state.message = action.error;
        // })
    },
})

export default productSlice.reducer