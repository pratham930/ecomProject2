
// import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import {useSingupProfileMutation} from "../services/profile"

// const SIgnUp = () => {

//     const [udata, setUdata] = useState({
//         name: "",
//         email: "",
//         mobile: "",
//         password: "",
//         cpassword: ""
//     });

//     console.log(udata);


//     const adddata = (e) => {
//         const { name, value } = e.target;

//         setUdata(() => {
//             return {
//                 ...udata,
//                 [name]: value
//             }
//         })
//     };

//     const [singupProfile] = useSingupProfileMutation()

//    console.log(singupProfile)


//     const senddata = async (e) => {
//         e.preventDefault();
//         const { name, email, mobile, password, cpassword } = udata;
// // const name1 = JSON.stringify(name)
// // const email1 = JSON.stringify(email)
// // const password1 = JSON.stringify(password)
// // const cpassword1 = JSON.stringify(cpassword)
// // const mobile1 = JSON.stringify(mobile)
//         // const res = await fetch("register", {
//         //     method: "POST",
//         //     headers: {
//         //         "Content-Type": "application/json"
//         //     },
//         //     body: JSON.stringify({
//         //         name, email, mobile, password, cpassword
//         //     })
//         // });

//         // const data = await res.json();
//         // // console.log(data);
// const data = await singupProfile( udata.name, udata.email, udata.mobile, udata.password, udata.cpassword)

//         if(!data){
//             // alert("no data")
//             toast.warn("invalid details",{
//                 position: "top-center",
//             })
//         }
//         else{
//             // alert("data succesfully adde");
//             toast.success("data succesfully added",{
//                 position: "top-center",
//             })
//             setUdata({...udata,name:"",email:"",mobile:"",password:"",cpassword:""});
//         }
//     }

//     return (
//         <section>
//             <div className="sign_container">
//                 <div className="sign_header">
//                     <img src="./blacklogoamazon.png" alt="amazonlogo" />
//                 </div>
//                 <div className="sign_form">
//                     <form method='POST'>
//                         <h1>Sign-Up</h1>
//                         <div className="form_data">
//                             <label htmlFor="fname">Your name</label>
//                             <input type="text"
//                                 onChange={adddata}
//                                 value={udata.name}
//                                 name="name" id="fname" />
//                         </div>
//                         <div className="form_data">
//                             <label htmlFor="email">Email</label>
//                             <input type="text"
//                                 onChange={adddata}
//                                 // onChange={(e)=>setUdata({...udata,email:e.target.value})}
//                                 value={udata.email}
//                                 name="email" id="email" />
//                         </div>
//                         <div className="form_data">
//                             <label htmlFor="number">Mobile</label>
//                             <input type="text"
//                                 onChange={adddata}
//                                 value={udata.mobile}
//                                 name="mobile" id="mobile" />
//                         </div>
//                         <div className="form_data">
//                             <label htmlFor="password">Password</label>
//                             <input type="password"
//                                 onChange={adddata}
//                                 value={udata.password}
//                                 name="password" placeholder='At least 6 char' id="password" />
//                         </div>
//                         <div className="form_data">
//                             <label htmlFor="cpassword">Password Again</label>
//                             <input type="password"
//                                 onChange={adddata}
//                                 value={udata.cpassword}
//                                 name="cpassword" id="cpassword" />
//                         </div>
//                         <button className='signin_btn' onClick={senddata}>Continue</button>

//                         <div className="signin_info">
//                             <p>Already have an account?</p>
//                             <NavLink to="/login">Signin</NavLink>
//                         </div>
//                     </form>
//                 </div>
//                 <ToastContainer />
//             </div>
//         </section>
//     )
// }

// export default SIgnUp





import { Grid, TextField, Typography,  Button, Box, Alert, Stack, } from '@mui/material';
//import { LocalizationProvider, DatePicker } from '@mui/lab';

import { useState } from 'react';
import { styled } from '@mui/material/styles';

import {useSingupProfileMutation} from "../services/profile"
//import Met from './Met';

function Singup() {

  // Style for Upload Button
  const Input = styled('input')({
    display: 'none',
  });

  // States
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [pimage, setPimage] = useState('')
 
  const [password, setpassword] = useState()
  const [cpassword, setcpassword] = useState()
  const [mobile, setmobile] = useState()
  const [work, setwork] = useState()
  //const [pimage, setPimage] = useState('')//
  
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })

  // Multi Checkbox
 

  // Clear Form
  const resetForm = () => {
    setName('')
    setEmail('')
    setwork('')
    setpassword('')
    setcpassword('')
    setPimage('')
    setmobile('')
    //setPimage('')
    
    document.getElementById('resume-form').reset()

  }
// RTK QUERRY

const [singupProfile] = useSingupProfileMutation()

console.log(singupProfile)

  // Handle Form Submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = new FormData()
    data.append('name', name)
    data.append('email', email)
    data.append('work', work)
    data.append('mobile', mobile)
    data.append('password', password)
    data.append('cpassword', cpassword)
    data.append('pimage', pimage)
    // data.append('pimage', pimage)
    
    if (name && email) {
      // await singupProfile(name ,email,password,cpassword,mobile,work)//
      const doc = await singupProfile(data)
      console.log(`mera ${doc.name}`)

      console.log(data.get('name'))
      console.log(data.get('email'))
      console.log(data.get('password'))
      console.log(data.get('cpassword'))
      console.log(data.get('mobile'))
      console.log(data.get('work'))
      // console.log(data.get('pimage'))
      
      setError({ status: true, msg: "Resume Uploaded Successfully", type: 'success' })
      resetForm()
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }
  }


  return (
    <>
      <Box display="flex" justifyContent="center" sx={{ backgroundColor: 'error.light', padding: 1 }}>
  <Typography variant='h5' component="div" sx={{ fontWeight: 'bold', color: 'white' }}>product details</Typography>
      </Box>
      <Grid container justifyContent="center">

        <Grid item xs={5}>
          <Box component="form" sx={{ p: 3 }} noValidate id="resume-form" onSubmit={handleSubmit}>
<TextField id="name" name="name" required fullWidth margin='normal' label='Name' onChange={(e) => setName(e.target.value)} />
<TextField id="email" email="email" required fullWidth margin='normal' label='Email' onChange={(e) => setEmail(e.target.value)} />
           
<TextField id="password" name="password" required fullWidth margin='normal' label='password' onChange={(e) => setpassword(e.target.value)} />
<TextField id="cpassword" email="cpassword" required fullWidth margin='normal' label='Confirm-password' onChange={(e) => setcpassword(e.target.value)} />
<TextField id="mobile" name="mobile" required fullWidth margin='normal' label='mobile' onChange={(e) => setmobile(e.target.value)} />
<TextField id="work" email="work" required fullWidth margin='normal' label='Profession' onChange={(e) => setwork(e.target.value)} />
   
             <Stack direction="row" alignItems="center" spacing={4} >
              <label htmlFor='profile-photo'>
                <Input accept="image/*" id="profile-photo" type="file" onChange={(e) => { setPimage(e.target.files[0]) }} />
                <Button variant='contained' component='span'>Upload Photo </Button>
              </label>
             
            </Stack> 
            <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }} color="error">Submit</Button>
            {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
          </Box>
        </Grid>

    
      </Grid>
    

    </>
  );
}

export default Singup;


// import { Grid, TextField, Typography, Button, Box, Alert, } from '@mui/material';
// //import { LocalizationProvider, DatePicker } from '@mui/lab';

// import { useState } from 'react';
// import { styled } from '@mui/material/styles';

// import {useSingupProfileMutation} from "../services/profile"
// //import Met from './Met';

// function Singup() {

//   // Style for Upload Button
//   const Input = styled('input')({
//     display: 'none',
//   });

//   // States
//   const [name, setName] = useState()
//   const [email, setEmail] = useState()
 
//   const [password, setpassword] = useState('')
//   const [mobile, setmobile] = useState()
//   const [work, setwork] = useState([])
//   const [cpassword, setcpassword] = useState('')
 
//   const [error, setError] = useState({
//     status: false,
//     msg: "",
//     type: ""
//   })


  
//   // Clear Form
//   const resetForm = () => {
//     setName('')
//     setEmail('')
    
//     setpassword('')
//     setmobile('')
//     setcpassword('')
//     setwork('')
    
//     document.getElementById('resume-form').reset()

//   }
// // RTK QUERRY

// const [saveProfile] = useSingupProfileMutation()

// console.log(saveProfile)

//   // Handle Form Submission
//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     const data = new FormData()
//     data.append('name', name)
//     data.append('email', email)
  
//     data.append('password', password)
//     data.append('cpassword', cpassword)
//     data.append('mobile', mobile)
//     data.append('work', work)

//     if (name && email) {
 
//       const doc = await saveProfile(data)
//       console.log(doc)

//       console.log(data.get('name'))
//       console.log(data.get('email'))
     
//       console.log(data.get('password'))
//       console.log(data.get('cpassword'))
//       console.log(data.get('mobile'))
//       console.log(data.get('work'))
      
//       setError({ status: true, msg: "Resume Uploaded Successfully", type: 'success' })
//       resetForm()
//     } else {
//       setError({ status: true, msg: "All Fields are Required", type: 'error' })
//     }
//   }


//   return (
//     <>
//       <Box display="flex" justifyContent="center" sx={{ backgroundColor: 'error.light', padding: 1 }}>
//         <Typography variant='h5' component="div" sx={{ fontWeight: 'bold', color: 'white' }}>product details</Typography>
//       </Box>
//       <Grid container justifyContent="center">

//         <Grid item xs={5}>
//           <Box component="form" sx={{ p: 3 }} noValidate id="resume-form" onSubmit={handleSubmit}>
//             <TextField id="name" name="name" required fullWidth margin='normal' label='Name' onChange={(e) => setName(e.target.value)} />
//             <TextField id="email" email="email" required fullWidth margin='normal' label='Email' onChange={(e) => setEmail(e.target.value)} />
            
//             <TextField id="password" name="password" required fullWidth margin='normal' label='password' onChange={(e) => setpassword(e.target.value)} />
//             <TextField id="cpassword" email="cpassword" required fullWidth margin='normal' label='confirm-password' onChange={(e) => setcpassword(e.target.value)} />


//             <TextField id="mobile" name="mobile" required fullWidth margin='normal' label='mobileNumber' onChange={(e) => setmobile(e.target.value)} />
//             <TextField id="work" email="work" required fullWidth margin='normal' label='Profession' onChange={(e) => setwork(e.target.value)} />


//             <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }} color="error">Submit</Button>
//             {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
//           </Box>
//         </Grid>

    
//       </Grid>
    

//     </>
//   );
// }

// export default Singup;