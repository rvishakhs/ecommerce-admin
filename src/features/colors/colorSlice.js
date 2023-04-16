import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import colorService from "./colorService";



// Initial States

const initialState = {
    color : [],
    newcolor : [],
    isLoading : false ,
    isError : false,
    isSucess : false,
    message : ""
}

// Function to get all existing colors
export const getcolors = createAsyncThunk("color/getcolors", async (thunkAPI)=>{
    try {
         return await colorService.getColors()
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})

// Function to create a new color
export const addcolor = createAsyncThunk("color/create-color", async (values, thunkAPI)=>{
    try {
         return await colorService.createcolor(values)
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})



export const colorSlice = createSlice({
    name : "color",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getcolors.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getcolors.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.color = action.payload;

        })
        .addCase(getcolors.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        }) 
        .addCase(addcolor.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(addcolor.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.newcolor = action.payload;

        })
        .addCase(addcolor.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        }) 
    },
})

export default colorSlice.reducer