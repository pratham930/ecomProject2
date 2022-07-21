import { Grid, TextField, Typography, FormControlLabel, Checkbox, Button, Box, Alert, InputLabel, MenuItem, Select, FormControl, FormLabel,FormGroup, Stack, } from '@mui/material';
//import { LocalizationProvider, DatePicker } from '@mui/lab';

import { useState } from 'react';
import { styled } from '@mui/material/styles';

import {useSaveProfileMutation} from "./services/profile"
//import Met from './Met';

function App() {

  // Style for Upload Button
  const Input = styled('input')({
    display: 'none',
  });

  // States
  const [name, setName] = useState()
  const [quantity, setquantity] = useState()
 
  const [st, setSt] = useState('')
  const [price, setprice] = useState()
  const [pjl, setPjl] = useState([])
  const [pimage, setPimage] = useState('')
  const [rdoc, setRdoc] = useState('')
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })

  // Multi Checkbox
  const getPjl = (e) => {
    let data = pjl
    data.push(e.target.value)
    setPjl(data)
  }

  // Clear Form
  const resetForm = () => {
    setName('')
    setquantity('')
    
    setSt('')
    setprice('')
    setPjl([])
    setPimage('')
    setRdoc('')
    document.getElementById('resume-form').reset()

  }
// RTK QUERRY

const [saveProfile] = useSaveProfileMutation()

console.log(saveProfile)

  // Handle Form Submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = new FormData()
    data.append('name', name)
    data.append('price', price)
  
    data.append('st', st)
    data.append('quantity', quantity)
    data.append('pjl', pjl)
    data.append('pimage', pimage)
    data.append('rdoc', rdoc)
    if (name && price) {
 
      const doc = await saveProfile(data)
      console.log(doc)

      console.log(data.get('name'))
      console.log(data.get('price'))
     
      console.log(data.get('st'))
      console.log(data.get('quantity'))
      console.log(data.get('pjl'))
      console.log(data.get('pimage'))
      console.log(data.get('rdoc'))
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
            <TextField id="email" quantity="quantity" required fullWidth margin='normal' label='quantity' onChange={(e) => setquantity(e.target.value)} />
  
            <FormControl fullWidth margin='normal'>
              <InputLabel id="state-select-label">State</InputLabel>
              <Select labelId='state-select-label' id='state-select' value={st} label='st' onChange={(e) => { setSt(e.target.value) }}>
                <MenuItem value="Jharkhand">Jharkhand</MenuItem>
                <MenuItem value="Bihar">Bihar</MenuItem>
                <MenuItem value="West Bengal">West Bengal</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin='normal'>
              <FormLabel id="gender-radio">price</FormLabel>
              <TextField id="email" price="price" required fullWidth margin='normal' label='price' onChange={(e) => setprice(e.target.value)} />
            </FormControl>
            <FormControl component='fieldset' fullWidth margin='normal'>
              <FormLabel component='legend'>Preferred Job Location:</FormLabel>
              <FormGroup row>
                <FormControlLabel control={<Checkbox />} label="Delhi" value="Delhi" onChange={(e) => getPjl(e)} />
                <FormControlLabel control={<Checkbox />} label="Mumbai" value="Mumbai" onChange={(e) => getPjl(e)} />
                <FormControlLabel control={<Checkbox />} label="Banglore" value="Banglore" onChange={(e) => getPjl(e)} />
                <FormControlLabel control={<Checkbox />} label="Ranchi" value="Ranchi" onChange={(e) => getPjl(e)} />
                <FormControlLabel control={<Checkbox />} label="Kolkata" value="Kolkata" onChange={(e) => getPjl(e)} />
              </FormGroup>
            </FormControl>
            <Stack direction="row" alignItems="center" spacing={4} >
              <label htmlFor='profile-photo'>
                <Input accept="image/*" id="profile-photo" type="file" onChange={(e) => { setPimage(e.target.files[0]) }} />
                <Button variant='contained' component='span'>Upload Photo </Button>
              </label>
              <label htmlFor="resume-file">
                <Input accept="doc/*" id="resume-file" type="file" onChange={(e) => { setRdoc(e.target.files[0]) }} />
                <Button variant="contained" component="span">Upload File</Button>
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

export default App;