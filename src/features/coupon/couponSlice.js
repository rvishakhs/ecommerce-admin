import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import couponService from "./couponService";


// Initial States

const initialState = {
    coupon : [],
    isLoading : false ,
    isError : false,
    isSucess : false,
    message : ""
}

// Getting all coupons
export const getcoupons = createAsyncThunk("coupon/getcoupons", async (thunkAPI)=>{
    try {
         return await couponService.getcoupons()
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})

// Creating new coupon in to DB

export const addcoupon = createAsyncThunk("coupon/create", async (values, thunkAPI)=>{
    try {
         return await couponService. createcoupon(values)
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})
// Fetching existing coupon from DB

export const fetchcoupon = createAsyncThunk("coupon/fetch-coupon", async (values, thunkAPI)=>{
    try {
         return await couponService.fetchcoupon(values)
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})

// FOR RESETTING INTO initial state
export const resetState = createAction("reset_all")


export const couponSlice = createSlice({
    name : "coupon",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getcoupons.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getcoupons.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.coupon = action.payload;

        })
        .addCase(getcoupons.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        }) 
        .addCase(addcoupon.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(addcoupon.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.createdcoupon = action.payload;

        })
        .addCase(addcoupon.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        }) 
        .addCase(fetchcoupon.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchcoupon.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.couponData = action.payload;

        })
        .addCase(fetchcoupon.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        }) 
        .addCase(resetState, () => initialState)
    },
})

export default couponSlice.reducer