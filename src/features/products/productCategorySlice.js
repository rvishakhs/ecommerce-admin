import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import productCategoryService from "./productCategoryService";



// Initial States

const initialState = {
    productcategory : [],
    isLoading : false ,
    isError : false,
    isSucess : false,
    message : ""
}

// Function to get all the product categories
export const getProdCategory = createAsyncThunk("product/getcategories", async (thunkAPI)=>{
    try {
         return await productCategoryService.getProdCategories()
        } catch (err) {
        return thunkAPI.rejectWithValue(err)
    }
})

// Function to create a new product category
export const addProdCategory = createAsyncThunk("product/createproductcategory", async (values, thunkAPI)=>{
    try {
         return await productCategoryService.createProdCategory(values)
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})

// FOR RESETTING INTO initial state
export const resetState = createAction("reset_all")


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
        .addCase(addProdCategory.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(addProdCategory.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.newproductCategory = action.payload;

        })
        .addCase(addProdCategory.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        }) 
        .addCase(resetState, () => initialState)
    },
})

export default productCategorySlice.reducer