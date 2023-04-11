import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogService from "./blogService";



// Initial States

const initialState = {
    blog : [],
    isLoading : false ,
    isError : false,
    isSucess : false,
    message : ""
}

export const getblogs = createAsyncThunk("blog/getblogs", async (thunkAPI)=>{
    try {
         return await blogService.getBlogs()
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})


export const blogSlice = createSlice({
    name : "blogs",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getblogs.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getblogs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.blog = action.payload;

        })
        .addCase(getblogs.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        }) 
    },
})

export default blogSlice.reducer