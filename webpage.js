import './webpage.css';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Link} from 'react-router-dom';

const webpage = () => {


    return ( 


  <body >

      <div class="header">
        <div>
        <pre><h1 id="all">FREE LANCERS!</h1></pre></div>

        <div class="dusi"><Link to='/Reg'><Button id="sign">Sign up</Button> </Link> 
        <Link to='/Login'><Button id="log">Log in</Button></Link></div>

    </div>

    <div class="navbar">
        <a href="#">HOME</a>
        <a href="#">FIND JOBS</a>
        <a href="#">HIRE FREELANCERS</a>
        <a href="#">GET IDEAS</a>
        <a href="#">ABOUT US</a>
        <a href="#">PROFILE</a>
        <a href="#">LOG OUT</a>


    </div>



    <div class="main">
        <h2><pre>Work with the best freelance talent from around the world on our secure,
flexible and cost-effective platform.</pre></h2>


    </div>

    <div className="contain">


        <div className="car">
            <h2 id="as" >Hire Best Freelancers</h2>
            <button id="but1">Hire Now</button></div>

        <div className="car">
            <h2 id="as">Find Jobs</h2>
            <button id="but1">Find Now</button>
        </div>
        <div className="car">
            <h2 id="as">Secure Payment Methods</h2>
            <button id="but1">Pay Now</button>
        </div>
        </div>


    <div className="dog">
    <div className="friend">
        <h2>800,000 </h2>
       <h3><p>Employers Worldwide</p></h3>
    </div>
    <div className="friend">
        <h2>1 Million</h2>
        <h3><p>Paid Invoices</p> </h3>
    </div>
    <div className="friend">
        <h2>$250 Million</h2>
        <h3><p>Paid to Freelancers</p> </h3>
    </div>
    <div className="friend">
        <h2>99%</h2>
        <h3><p>Customer Satisfaction Rate</p></h3>
    </div>
    </div>

    <h1 id="mani">FIND AND HIRE EXPERT FREELANCERS</h1>
    <div class="bgg">
    <div class="bgg1"><div className="dog1">
    <div className="friend2">
        <h2>Programming </h2>
        <h3><p>273,978 Freelancers</p> </h3>
    </div>
    <div className="friend2">
        <h2>Writing & Teaching</h2>
        <h3><p>203,978 Freelancers</p> </h3>
    </div>
    <div class="friend2">
        <h2>Design & Art</h2>
        <h3><p>183,978 Freelancers</p> </h3>
    </div>

    </div>
    <div class="dog2">
    <div class="friend2">
        <h2>Sales And Marketing</h2>
        <h3><p>373,978 Freelancers</p> </h3>
    </div>
    <div class="friend2">
        <h2>Business & Finance</h2>
        <h3><p>203,254 Freelancers</p> </h3>
    </div>
    <div class="friend2">
        <h2>Education</h2>
        <h3><p>189,345 Freelancers</p> </h3>
    </div>

    </div>
    </div>

</div>

    <div class="footer">

        <a href="#">JOBS</a>
        <a href="#">FREELANCERS</a>
        <a href="#">PAYMENT METHODS</a>

    </div>
</body>




     );
}

export default webpage;
