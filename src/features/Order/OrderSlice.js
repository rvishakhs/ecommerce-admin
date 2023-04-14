import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderService from "./OrderService";



// Initial States

const initialState = {
    allOrders : [],
    isLoading : false ,
    isError : false,
    isSucess : false,
    message : ""
}

export const getAllOrders = createAsyncThunk("orders/AllOrders", async (thunkAPI)=>{
    try {
         return await orderService.getAllOrders()
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})


export const ordersSlice = createSlice({
    name : "allOrders",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getAllOrders.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getAllOrders.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.allOrders = action.payload;

        })
        .addCase(getAllOrders.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        }) 
    },
})

export default ordersSlice.reducer