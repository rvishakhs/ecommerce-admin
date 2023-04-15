import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import imgUploadService from "./uploadimageService";



// Initial States

const initialState = {
    images : [],
    isLoading : false ,
    isError : false,
    isSucess : false,
    message : ""
}

export const imageUpload = createAsyncThunk("image/upload", async (data , thunkAPI)=>{
    try {
        const formdata = new FormData();

        for (let i = 0; i<data.length; i++) {
            formdata.append("images", data[i]); 
        }
         return await imgUploadService.uploadImage(formdata)
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})


export const imgUploadSlice = createSlice({
    name : "images",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(imageUpload.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(imageUpload.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.images = action.payload;

        })
        .addCase(imageUpload.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        }) 
    },
})

export default imgUploadSlice.reducer