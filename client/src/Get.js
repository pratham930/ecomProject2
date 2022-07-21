import React from 'react'
import {useGetProfileQuery} from "./services/profile"
// import { useState,useEffect } from 'react';
import { useDispatch,useSelector} from 'react-redux';
import {addToCart} from "./features/CartSlice"
import "./Css/cart.css"

//import Met from "./Met"

const Get = () => {

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart);
    console.log(cart.cartItems)

  const {data,isLoading,isError,isSuccess} = useGetProfileQuery();
//   const [cat, setcat] = useState([])

// useEffect(() => {
//   if (data && isSuccess) {
//     setcat(data)
//   }
  
// }, [data])

   
    console.log(isLoading)
    console.log(isError)
    console.log(isSuccess)
    console.log(data)

    // const handleAddToCart = (produc) => {
    //   dispatch(addToCart(produc));
    // };
  
    

  return (
    <>

    <h1>
      dil products
    </h1>
    {
   data?.map((value,_id)=>{

         return     <div className='items' key ={value._id}>
         
         <h1>{value.name}</h1>
         <h1>{value.price}</h1>
         
         <h1>{value.quantity}</h1>
         {/* <h1>{value.st}</h1> */}
         {/* <h1>{.rdoc}</h1> */}
        
   <img className='image' src={`http://localhost:9000/${value.pimage}`} alt="product pic"  />
   {/* <img src={`http://localhost:9000/${value.rdoc}`} alt="product pic" srcset="" /> */}

   <button onClick ={()=>dispatch(addToCart(value))} >
addToCart
   </button>
         
             </div>
    })
    }
    
    </>
  )
}

export default Get;
