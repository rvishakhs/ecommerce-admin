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

// Function for getting all enquries
export const getenquiry = createAsyncThunk("enquiry/getenquiry", async (thunkAPI)=>{
    try {
         return await enquiryService.getEnquiry()
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})

// Function for deleting single enquiry

export const deleteenquiry = createAsyncThunk("enquiry/deleteenquiry", async (values, thunkAPI)=>{
    try {
         return await enquiryService.deleteEnquiry(values)
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})

// Funtion for fetching single enquiry

export const fetchenquiry = createAsyncThunk("enquiry/fetchenquiry", async (values, thunkAPI)=>{
    try {
         return await enquiryService.getsingleEnquiry(values)
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
        .addCase(deleteenquiry.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(deleteenquiry.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.deletedEnquiry = action.payload;

        })
        .addCase(deleteenquiry.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        }) 
        .addCase(fetchenquiry.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchenquiry.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.fetchedEnquiry = action.payload;

        })
        .addCase(fetchenquiry.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        }) 
    },
})

export default enquirySlice.reducer