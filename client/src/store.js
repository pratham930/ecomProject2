import { configureStore } from '@reduxjs/toolkit'
//import thunkMiddleware from 'redux-thunk'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { profileApi } from './services/profile'
// import productReducer from './features/Slice'
// import { fetchProducts } from './features/Slice'
import cartReducer from './features/CartSlice'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [profileApi.reducerPath]: profileApi.reducer,
    //  products: productReducer,
     cart:cartReducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(profileApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
// store.dispatch(fetchProducts());