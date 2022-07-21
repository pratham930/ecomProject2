import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalItem: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

addToCart(state, action) {   
  // state.cartItems.push(action.payload);
      const existingIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          quantity: state.cartItems[existingIndex].quantity + 1,
        };
      
      } else {
      
        let tempProductItem = { ...action.payload, quantity: 1};
        state.cartItems.push(tempProductItem);

      }
    },


removeFromCart(state, action) { 
      state.cartItems.pop(action.payload);
        },



  remove(state, action) { 

    // let CartInc = state.cartItems.map((car) => {
    //   if (car._id === action.payload) {
    //   return state.cartItems.pop(action.payload)

    //   }
      const existing = state.cartItems.map(
        (item) => item._id === action.payload._id
      );
      if (existing) {
        let tempProductItem = { ...action.payload};
        state.cartItems.pop(tempProductItem);
      }

    }, 
    


clearCart(state, action) { 
          return{
            ...state,cartItems:[]
          }
            },

decreaseCart(state, action) { 
          let CartInc = state.cartItems.map((car) => {
            if (car._id === action.payload) {
              return { ...car, quantity: (car.quantity - 1 > 0) ? car.quantity - 1 : 0 };
            }
            return car;
          });

          return { ...state, cartItems: CartInc };
            },


 getTotals(state, action) { 
          let { totalItem, totalAmount } = state.cartItems.reduce((accum, cvalue) => {
            let { price, quantity } = cvalue;
            let updatedtotalAmount = price * quantity;
            accum.totalAmount += updatedtotalAmount;
            accum.totalItem += quantity;
            return accum;
          },
            {
              totalItem: 0,
              totalAmount: 0,
            })
          return { ...state, totalItem, totalAmount };
          ;
            },
  },
});

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart,remove } =
  cartSlice.actions;

export default cartSlice.reducer;