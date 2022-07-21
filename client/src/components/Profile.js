import React from 'react'
import {useGetDetailsQuery} from "../services/profile"
import { useState,useEffect } from 'react';


//import Met from "./Met"

const Profile = () => {

  const {data,isLoading,isError,isSuccess} = useGetDetailsQuery();
  const [cat, setcat] = useState([])

useEffect(() => {
  if (data && isSuccess) {
    setcat(data)
  }
  
}, [data])

  return (
    <>

    <h1>
      dil jab 
    </h1>
    {
   cat.map((value,_id)=>{

         return     <div key ={value._id}>
         
        
   <div className="container mt-4">

    <form method="GET">

      <div className="jumbotron">
        <h1 className="display-4">{value.name}</h1>

        <h3>{value.work}</h3>
        <h4>Work links</h4>
      
        <hr className="my-4" />
    

        <h5>User ID : {value._id} </h5>
        <h5>Name :{value.name}</h5>
        <h5>email :{value.email} </h5>
        <h5>phone : {value.mobile} </h5>
        <h5>Profession :{value.work}</h5>
        <div className="lead">
          <h5 className="btn btn-primary btn-lg" role="button">
            Edit Profile
          </h5>
        </div>
      </div>
      </form>
    
    </div>
         
             </div>
    })
    }
    
    </>
  )
}

export default Profile;
