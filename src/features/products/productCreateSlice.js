import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productCreateService from "./productCreateService";



// Initial States

const initialState = {
    createdproduct : [],
    isLoading : false ,
    isError : false,
    isSucess : false,
    message : ""
}

export const createproduct = createAsyncThunk("product/create", async (value, thunkAPI)=>{
    try {
         return await productCreateService.createProduct(value)
        } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})


export const createdproductSlice = createSlice({
    name : "createdproduct",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(createproduct.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createproduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.createdproduct = action.payload;

        })
        .addCase(createproduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        }) 
    },
})

export default createdproductSlice.reducer