
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// // import {useGetProfileQuery } from '../services/profile'
// import axios from "axios"


// const initialState={
//     items:{},
//     state:null,

// }

// // First, create the thunk
// export const fetchProducts = createAsyncThunk(
//   'products/fetchProducts',
//   async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:9000/api/getProducts"
//       );
//       console.log(response.data.categories)
//       return response.data;
     
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );
// const productsSlice = createSlice({
//     name: "products",
//     initialState,
//     reducers: {},
//     extraReducers: {
//       [fetchProducts.pending]: (state, action) => {
//         state.status = "pending";
//       },
//       [fetchProducts.fulfilled]: (state, action) => {
//         state.items = action.payload;
//         state.status = "success";
//       },
//       [fetchProducts.rejected]: (state, action) => {
//         state.status = "rejected";
//       },
//     },
//   });
  
//   export default productsSlice.reducer;

