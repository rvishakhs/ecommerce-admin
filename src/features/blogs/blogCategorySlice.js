import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import blogCategoryService from "./blogCategoryService";



// Initial States

const initialState = {
    blogcategory : [],
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

// Fetch single blog category
export const fetchBlogCategory = createAsyncThunk("blog/fetch-category", async (values,thunkAPI)=>{
    try {
        return await blogCategoryService.fetchblogcategory(values)
    }catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})

// Updating Existing blog category 
export const updateBlogCategory = createAsyncThunk("blog/update-category", async (values,thunkAPI)=>{
    try {
        return await blogCategoryService.updateblogcategory(values)
    }catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})


// FOR RESETTING INTO initial state
export const resetState = createAction("reset_all")


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
        .addCase(fetchBlogCategory.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchBlogCategory.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.blogcategoryName = action.payload.tittle;

        })
        .addCase(fetchBlogCategory.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        }) 
        .addCase(updateBlogCategory.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(updateBlogCategory.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.updatedBlogCategory = action.payload;

        })
        .addCase(updateBlogCategory.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        }) 
        .addCase(resetState, () => initialState)
    },
})

export default blogCategorySlice.reducer