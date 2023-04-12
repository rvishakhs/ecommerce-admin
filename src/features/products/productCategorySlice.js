import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productCategoryService from "./productCategoryService";



// Initial States

const initialState = {
    productcategory : [],
    isLoading : false ,
    isError : false,
    isSucess : false,
    message : ""
}

export const getProdCategory = createAsyncThunk("product/getcategories", async (thunkAPI)=>{
    try {
         return await productCategoryService.getProdCategories()
        } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})


export const productCategorySlice = createSlice({
    name : "prodCategory",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getProdCategory.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getProdCategory.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.productcategory = action.payload;

        })
        .addCase(getProdCategory.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        }) 
    },
})

export default productCategorySlice.reducer