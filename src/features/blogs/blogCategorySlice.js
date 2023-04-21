import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogCategoryService from "./blogCategoryService";



// Initial States

const initialState = {
    blogcategory : [],
    newblogcategory : [],
    isLoading : false ,
    isError : false,
    isSucess : false,
    message : ""
}

// Reduc function to getallblog categories

export const getblogCategory = createAsyncThunk("blog/getblogcategories", async (thunkAPI)=>{
    try {
         return await blogCategoryService.getBlogCategories()
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})

// This redux function used to create new blog categories

export const createNewCategory = createAsyncThunk("blog/createblogcategory", async (values,thunkAPI)=>{
    try {
        return await blogCategoryService.createblogCategory(values)
    }catch (err) {
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
        .addCase(createNewCategory.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createNewCategory.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.newblogcategory = action.payload;

        })
        .addCase(createNewCategory.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        }) 
    },
})

export default blogCategorySlice.reducer