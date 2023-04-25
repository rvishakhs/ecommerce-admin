import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import blogService from "./blogService";



// Initial States

const initialState = {
    blog : [],
    isLoading : false ,
    isError : false,
    isSucess : false,
    message : ""
}

// For getting all blogs

export const getblogs = createAsyncThunk("blog/getblogs", async (thunkAPI)=>{
    try {
         return await blogService.getBlogs()
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})

// For creating a new blog
export const creatBlog = createAsyncThunk("blog/create-blog", async (values, thunkAPI)=>{
    try {
         return await blogService.createBlog(values)
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})

// Function for fetching all blogs
export const fetchBlog = createAsyncThunk("blog/fetch-blog", async (values, thunkAPI)=>{
    try {
         return await blogService.fetchBlog(values)
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})



// For deleting blog
export const deleteBlog = createAsyncThunk("blog/delete-blog", async (values, thunkAPI)=>{
    try {
         return await blogService.deleteBlog(values)
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})



// Reseting all states
export const resetState = createAction("reset all")


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
        .addCase(creatBlog.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(creatBlog.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.createdblog = action.payload;

        })
        .addCase(creatBlog.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        }) 
        .addCase(deleteBlog.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(deleteBlog.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.deletedblog = action.payload;

        })
        .addCase(deleteBlog.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        }) 
        .addCase(fetchBlog.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchBlog.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.blogData = action.payload;
            state.blogImage = action.payload.image;

        })
        .addCase(fetchBlog.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        }) 
        .addCase(resetState, ()=> initialState)
    },
})

export default blogSlice.reducer