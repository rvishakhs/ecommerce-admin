import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

const UserDefaultState = {
    _id : null,
    firstname : null,
    lastname : null,
    email : null,
    mobile : null,
    token : null,
    role : null,
}

const initialState = {
    user : UserDefaultState,
    isError : false,
    isLoading : false,
    isSucess: false,
    message : "",    
}

export const login = createAsyncThunk("auth/admin-login", async (user, thunkAPI)=>{
    try {
         return await authService.login(user)
    } catch (err) {
        return thunkAPI.rejectWithValue(err)
        // throw new Error(`Error is related to createAsyncThun login section ${err.message}`)
    }
})

export const authSlice = createSlice({
    name : "auth",
    initialState : initialState,
    reducers : {},
    extraReducers :(builder) =>  {
        builder
        .addCase(login.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSucess = true;
            state.user = action.payload;
        })
        .addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.isSucess = false;
            state.isError = true;
            state.user = null;
        });
    } ,
}) 

export default authSlice.reducer