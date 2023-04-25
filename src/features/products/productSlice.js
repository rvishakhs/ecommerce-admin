import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import productService from "./productService";



// Initial States

const initialState = {
    product : [],
    isLoading : false ,
    isError : false,
    isSucess : false,
    message : ""
}

// Getting all products
export const getProducts = createAsyncThunk("product/getproducts", async (thunkAPI)=>{
    try {
         return await productService.getProducts()
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})
// Create a new product
export const addProducts = createAsyncThunk("product/create-products", async (values, thunkAPI)=>{
    try {
         return await productService.createProduct(values)
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})

// Function to fetch product to update
export const fetchProducts = createAsyncThunk("product/fetch-products", async (values, thunkAPI)=>{
    try {
         return await productService.fetchproduct(values)
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})

// Function to update product

export const updateProducts = createAsyncThunk("product/update-products", async (values, thunkAPI)=>{
    try {
         return await productService.updateproduct(values)
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})

// Function for deleteing products using id

export const deleteProducts = createAsyncThunk("product/delete-products", async (values, thunkAPI)=>{
    try {
         return await productService.deleteProducts(values)
    } catch (err) {
        return thunkAPI.rejectWithValue(err)

    }
})

// FOR RESETTING INTO initial state
export const resetState = createAction("reset_all")


export const productSlice = createSlice({
    name : "products",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucess = true;
            state.product = action.payload;

        })
        .addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSucess = false;
            state.message = action.error;
        })
        .addCase(addProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(addProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSucess = true;
            state.isError = false;
            state.newproduct = action.payload;
        })
        .addCase(addProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isSucess = false;
            state.isError = true;
            state.message = action.error;
        })
        .addCase(deleteProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(deleteProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSucess = true;
            state.isError = false;
            state.deletedProduct = action.payload;
        })
        .addCase(deleteProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isSucess = false;
            state.isError = true;
            state.message = action.error;
        })
        .addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSucess = true;
            state.isError = false;
            state.productData = action.payload;
            state.productColor = action.payload.color;
            state.productImages = action.payload.image;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isSucess = false;
            state.isError = true;
            state.message = action.error;
        })
        .addCase(updateProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(updateProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSucess = true;
            state.isError = false;
            state.updatedProduct = action.payload;
        })
        .addCase(updateProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isSucess = false;
            state.isError = true;
            state.message = action.error;
        })
        .addCase(resetState, () => initialState)
    },
})

export default productSlice.reducer