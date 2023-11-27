import './Reg.css';
import * as React from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



const Reg = () => {


    return ( 
      <body id="bo1">
        <div className="container2">
            <div className="sign">
            <div >    <h1>Sign up</h1></div>

            </div>
    <div className="flname">
      <div><TextField id="fname" label="First name" variant="outlined" /> </div>
      <div ><TextField id="lname" label="Last name" variant="outlined" /></div>
     <br></br><br></br><br></br><br></br>
     </div>
     <div className="sname">

      <div ><Box sx={{ minWidth: 330 }}>
      <FormControl fullWidth>
        <InputLabel id="country">Country of Residence</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Country of Residence"
        >
          <MenuItem value={10}>India</MenuItem>
          <MenuItem value={20}>Sri Lanka</MenuItem>
          <MenuItem value={30}>Australia</MenuItem>
        </Select>
      </FormControl>
    </Box>
      </div>
      <div><TextField id="post" label="Postal Code" variant="outlined" /></div>

     <br></br><br></br><br></br><br></br>
     </div>


      <div ><TextField id="email" style={{marginLeft:"1px"}} label="Email" variant="outlined" /></div>

      <br></br>

     <div className="pname">

      <div ><TextField id="pass" label="Password" variant="outlined" /></div>
      <div ><TextField id="cpass" label="Confirm password" variant="outlined" /></div>

     <br></br><br></br><br></br><br></br>
     </div>
<div className="but">
    <div>
<Button id="button" variant="contained" href='\'>Register</Button></div>
<div id="log"><br></br>Already have an account?<a href="/Login">Log in</a></div>
</div>






</div>
</body>

     );
}

export default Reg;
