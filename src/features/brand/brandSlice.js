import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import brandService from "./brandService";



// Initial States

const initialState = {
    brand : [],
    isLoading : false ,
    isError : false,
    isSucess : false,
    message : ""
}

// Getting all brands
export const getbrands = createAsyncThunk("brand/getbrands", async (thunkAPI)=>{
    try {
         return await brandService.getBrands()
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})

// Getting a single brand
export const getabrand = createAsyncThunk("brand/get-brand", async (id, thunkAPI)=>{
    try {
         return await brandService.getabrand(id)
    } catch (err) {
        return thunkAPI.rejectWithValue(err)
    }
})


// Creating new brand in to DB

export const addBrand = createAsyncThunk("brand/create", async (values, thunkAPI)=>{
    try {
         return await brandService.createBrand(values)
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})

// FOR RESETTING INTO initial state
export const resetState = createAction("reset_all")


export const brandSlice = createSlice({
    name : "brand",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getbrands.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getbrands.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.brand = action.payload;

        })
        .addCase(getbrands.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        }) 
        .addCase(addBrand.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(addBrand.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.createdBrand = action.payload;

        })
        .addCase(addBrand.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        }) 
        .addCase(getabrand.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getabrand.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.brandName = action.payload.tittle;

        })
        .addCase(getabrand.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        }) 
        .addCase(resetState, () => initialState)
    },
})

export default brandSlice.reducer