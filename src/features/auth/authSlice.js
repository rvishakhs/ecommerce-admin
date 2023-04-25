import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { RiNurseFill } from 'react-icons/ri'
import authService from './authService'

const getuserFromLocalStorage = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
 
const initialState = {
    user : getuserFromLocalStorage,
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

// FOR RESETTING INTO initial state
export const resetState = createAction("reset_all")

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
        })
        .addCase(resetState, () => initialState);
    } ,
}) 

export default authSlice.reducer