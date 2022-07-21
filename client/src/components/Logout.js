import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogoutProfileQuery } from '../services/profile'


const Logout = () => {

    const {data,isLoading,isError,isSuccess} =  useLogoutProfileQuery();
console.log(data)
 const navigate =   useNavigate()

useEffect(() => {
    if (data) {
        
    }
   
    // fetch("/logout",{
  
    //         method:"GET",
    //         headers:{
    //           "Content-Type": "application/json",
    //           Accept: "application/json"
    //         },
    //         credentials:"include"
    //            }).then((res)=>{
    //         navigate("/login", {replace:true});
    //         if (res.status !== 200) {
    //             const error = new Error(res.error)
    //             throw error;}
    //            }).catch((err)=>{
    //                console.log(err);
    //            })
 
 
}, [])
    return (
        <>
            

            <div className="h1">
                logout page
            </div>
        </>
    )
}
export default Logout;