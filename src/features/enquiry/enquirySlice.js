import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import enquiryService from "./enquiryService";



// Initial States

const initialState = {
    enquiry : [],
    isLoading : false ,
    isError : false,
    isSucess : false,
    message : ""
}

export const getenquiry = createAsyncThunk("enquiry/getenquiry", async (thunkAPI)=>{
    try {
         return await enquiryService.getEnquiry()
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})


export const enquirySlice = createSlice({
    name : "enquiry",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getenquiry.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getenquiry.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.enquiry = action.payload;

        })
        .addCase(getenquiry.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        }) 
    },
})

export default enquirySlice.reducer