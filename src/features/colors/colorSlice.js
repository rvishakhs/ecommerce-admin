import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import colorService from "./colorService";



// Initial States

const initialState = {
    color : [],
    isLoading : false ,
    isError : false,
    isSucess : false,
    message : ""
}

export const getcolors = createAsyncThunk("color/getcolors", async (thunkAPI)=>{
    try {
         return await colorService.getColors()
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
    },
})

export default colorSlice.reducer