import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000/api',
  // prepareHeaders(headers) {
  //   return headers;
  // },
  // credentials: "include"
 
}),
 
  endpoints: (builder) => ({

    saveProfile: builder.mutation({
      query: (itemDetails) => {
    return{
    url:'products',
    method:'POST',
    body:itemDetails
                 }
      },
     
    }),

    singupProfile: builder.mutation({
      query: (details) => {
      return{
     url:'singup',
    method:'POST',
    body:details
                }
      },
      
    }),

    getProfile: builder.query({
      query: () => {
       return{
    url:'getProducts',
    method:'GET',
    
     }
      }
    }),

    // getProductbyId: builder.query({
    //   query: () => {
    //    return{
    // url:`getProductbyId/${id}`,
    // method:'GET',
    //             }
    //   }
    // }),

    getDetails: builder.query({
      query: () => {
return{
    url:'details',
    method:'GET',
    // credentials:"include",
    // headers : {'Content-Type':'application/json',
    //                 'Access-Control-Allow-Origin':'*',
    //                 'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'}
 
}
      }
    }),

    LogoutProfile: builder.query({
      query: () => {
 return{
    url:'logout',
    method:'GET',
  
 
}
      }
    }),


    loginProfile: builder.mutation({
      query: (loginDetails) => {
     return{
    url:'login',
    method:'POST',
    body:loginDetails,
  //   headers: {
  //     'content-type':"application/json",
  // },
                     }
      }
    }),


  }),

})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSaveProfileMutation,useGetProfileQuery,
  useGetDetailsQuery,useSingupProfileMutation,useGetProductbyIdQuery,useLogoutProfileQuery,
  useLoginProfileMutation} = profileApi;