import {createSlice} from '@reduxjs/toolkit'


export const productsSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //Get All products
        getProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products = action.payload;
        },
        getProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        // Delete product
        deleteProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products.splice(
                state.products.find(item => item._id === action.payload)
            );
        },
        deleteProductFailure: (state) => {
            state.isFetching = false;
            state.error = true
        },
    }
})


export const { getProductStart, getProductSuccess, getProductFailure, deleteProductStart, deleteProductSuccess, deleteProductFailure } = productsSlice.actions;
export default productsSlice.reducer;