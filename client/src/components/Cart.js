import React from 'react'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {removeFromCart} from "../features/CartSlice"
import {getTotals} from "../features/CartSlice"
import {decreaseCart} from "../features/CartSlice"
import {clearCart} from "../features/CartSlice"
import {remove} from "../features/CartSlice"
import "../Css/cart.css"


const Cart = () => {
    const {cartItems,totalItem,totalAmount} = useSelector((state) => state.cart);
    console.log(cartItems)
    console.log(getTotals)
    const dispatch = useDispatch()


    useEffect(() => {
      dispatch(getTotals());
    }, [cartItems, dispatch]);

  return (
    <>

<div className="aram">
    dil ka kya kasoor CART
    </div>
    {
   cartItems.map((value,_id)=>{

         return     <div key ={value._id}>
         
         <h1>{value.name}</h1>
         <h1>{value.price}</h1>
         
         <h1>{value.quantity}</h1>
         {/* <h1>{value.st}</h1> */}
         {/* <h1>{.rdoc}</h1> */}
        
   <img className='image' src={`http://localhost:9000/${value.pimage}`} alt="product pic"  />
   {/* <img src={`http://localhost:9000/${value.rdoc}`} alt="product pic" srcset="" /> */}

   <button onClick ={()=>dispatch(removeFromCart(value))} >
   removeFromCart
   </button>
   <button onClick ={()=>dispatch(decreaseCart(value._id))} >
   decrease item
   </button>
   <button onClick ={()=>dispatch(clearCart())} >
   clearCart
   </button>
   <button onClick ={()=>dispatch(remove(value._id))} >
   removethis
   </button>
   

   <h1>
   items: {totalItem}
   </h1>
   <h1>
    Amount: {totalAmount}
   </h1>
   </div>
    })
    }


    </>
   
   )
  
}

export default Cart;