import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import colorService from "./colorService";



// Initial States

const initialState = {
    color : [],
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

// Function to fetch color 
export const fetchcolor = createAsyncThunk("color/get-color", async (values, thunkAPI)=>{
    try {
         return await colorService.fetchcolor(values)
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})

// Function to update single color
export const updatecolor = createAsyncThunk("color/update-color", async (values, thunkAPI)=>{
    try {
         return await colorService.updatecolor(values)
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})

// Function to delete single color
export const deleteColor = createAsyncThunk("color/delete-color", async (values, thunkAPI)=>{
    try {
         return await colorService.deletecolor(values)
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})



// FOR RESETTING INTO initial state
export const resetState = createAction("reset_all")


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
        .addCase(fetchcolor.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchcolor.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.colorName = action.payload.tittle;

        })
        .addCase(fetchcolor.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        })
        .addCase(updatecolor.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(updatecolor.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.updatedColor = action.payload

        })
        .addCase(updatecolor.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        })
        .addCase(deleteColor.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(deleteColor.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.deletedColor = action.payload

        })
        .addCase(deleteColor.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        })
        .addCase(resetState, () => initialState) 
    },
})

export default colorSlice.reducer