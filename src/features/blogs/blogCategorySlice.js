import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogCategoryService from "./blogCategoryService";



// Initial States

const initialState = {
    blogcategory : [],
    isLoading : false ,
    isError : false,
    isSucess : false,
    message : ""
}

export const getblogCategory = createAsyncThunk("blog/getblogcategories", async (thunkAPI)=>{
    try {
         return await blogCategoryService.getBlogCategories()
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})


export const blogCategorySlice = createSlice({
    name : "blogcategory",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getblogCategory.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getblogCategory.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.blogcategory = action.payload;

        })
        .addCase(getblogCategory.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        }) 
    },
})

export default blogCategorySlice.reducer