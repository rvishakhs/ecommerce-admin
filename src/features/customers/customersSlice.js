import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customerService from "./customerService";


// Initial States

const initialState = {
    customer : [],
    isLoading : false ,
    isError : false,
    isSucess : false,
    message : ""
}

export const getusers = createAsyncThunk("customer/getusers", async (thunkAPI)=>{
    try {
         return await customerService.getusers()
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})


export const customerSlice = createSlice({
    name : "users",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getusers.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getusers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.customer = action.payload;

        })
        .addCase(getusers.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        }) 
    },
})

export default customerSlice.reducer