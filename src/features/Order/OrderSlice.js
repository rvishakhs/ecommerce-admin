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

// Function for getting all order
export const getAllOrders = createAsyncThunk("orders/AllOrders", async (thunkAPI)=>{
    try {
         return await orderService.getAllOrders()
    } catch (err) {
        return thunkAPI.rejectWithValue(err)
    }
})

// Function for getting order by user

export const getUserOrders = createAsyncThunk("orders/UserOrders", async (id, thunkAPI)=>{
    try {
         return await orderService.getOrderByUser(id)
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
        .addCase(getUserOrders.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getUserOrders.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.userOrder = action.payload;

        })
        .addCase(getUserOrders.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        }) 
    },
})

export default ordersSlice.reducer