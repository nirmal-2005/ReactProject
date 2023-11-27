import{useState} from 'react';
import './Login.css';
import * as React from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Login(){

    return ( 

<div id="bo">
<div className="container1">
    <div className="image">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsMDw-8fOYhKu9Q6SzimIApUZ9PUQi4iFYqA&usqp=CAU" alt="Avatar"></img>
    </div>

    <pre id="f"><h1><b>LOG IN</b></h1></pre>

    <label for="uname"><h3 id="bhavi"><b>Username or Email</b></h3></label>
    <TextField id="textbox" variant="outlined" placeholder='Enter Username or Email' />
    <br></br>
    <label  for="psw"><h3 id="bhavi2"><b>Password</b></h3></label>
    <TextField id="textbox" variant="outlined" placeholder='Enter Password' />

        <br></br>
        <div className="forgot"><h3><a href="#">Forgot Passoword?</a></h3></div>


        <Button id="button1"variant="contained" href='\'>Login</Button>
</div>
</div>

     );
}

export default Login;
