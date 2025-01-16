import React, { useState } from "react";
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Navbar.css'

function Navbar()
{
  const[menu,setmenu] = useState("menu");

   return(

   <>
<nav className='navbar fixed-top navbar-expand-lg navbar-light bg-dark'>
  <div className="container-fluid">
  <a class="navbar-brand" href="/" style={{color:"yellow",fontFamily:"monospace"}}><b>Hey.Taxi</b>  </a>
        
   <button style={{width:"60px",color:"white",backgroundColor:"yellow"}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" ></span>
    </button>
    <div  class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{marginRight:"70px"}}>
      <li onClick={()=>setmenu("Home")} className={menu==="Home"?"active":""} style={{marginLeft:"20px"}}>
          <Link to="/" style={{color:"white",textDecoration:"none",fontFamily:"monospace"}} className="a"> Home </Link>
         </li>
         <li onClick={()=>setmenu("About Us")} className={menu==="About Us"?"active":""} style={{marginLeft:"20px"}}>
          <Link to="about" style={{color:"white",textDecoration:"none",fontFamily:"monospace"}} className="a">About Us</Link>
         </li>
         <li onClick={()=>setmenu("Log in")}   className={menu==="Log in"?"active":""} style={{marginLeft:"20px"}}>
          <Link to="Login" style={{color:"white",textDecoration:"none",fontFamily:"monospace"}} className="a">Login</Link>
         </li>
         <li onClick={()=>setmenu("Sign Up")}  className={menu==="Sign Up"?"active":""} style={{marginLeft:"20px"}}>
          <Link to="Regstr" style={{color:"white",textDecoration:"none",fontFamily:"monospace"}} className="a">Sign Up</Link>
         </li>
         {/* <li onClick={()=>setmenu("Dashboard")}  style={{marginLeft:"20px"}}>
          <Link to="dash" style={{color:"white",textDecoration:"none",fontFamily:"monospace"}} className="a">Dashboard</Link>
         </li><li onClick={()=>setmenu("book")}   style={{marginLeft:"20px"}}>
          <Link to="booking" style={{color:"white",textDecoration:"none",fontFamily:"monospace"}} className="a">book</Link>
         </li> */}

        
    </ul>
    
  </div>
 
   </div>
  </nav>
  
   </>

    );
}
export default Navbar;