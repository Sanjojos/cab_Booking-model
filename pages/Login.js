 import React, { useState } from "react"
 import './Login.css'
 import ima from '../images/lean.jpg'
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
   
 function Login(){
    const navigate= useNavigate();
    const [data, setData] = useState({
        email:'',
        npass:''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setData((prevData) => ({
            ...prevData,[id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));

        if (registeredUser && registeredUser.email === data.email&& registeredUser.npass === data.npass) {
            localStorage.setItem('loggedInUser', JSON.stringify(registeredUser));
            toast.success("Login successful!");
            navigate("/dash");
        } else {
            toast.warn("Invalid email or password");
        }
    };

   

     return(
         <>
        { 
            <div className="container d-flex justify-content-center align-items-center min-vh-100" id="log">
            <div className="row border rounder-5 p-3 bg-white shadow box-area">
                <div className="col-md-6 rounded d-flex justify-content-center align-items-center flex-column left-box">
                <div className="featured-image">
                <img src={ima} alt='error' className="img-fluid" ></img>
                </div>
                </div>
                <div className="col-md-6 right-box">
                    
                     <div className="row">
                   
                                 
                                               
                
                              <div className="col-sm-12">
                   
                                  <form className="md-float-material form-material"  onSubmit={handleSubmit} style={{paddingTop:"35px"}}>
                                      <div className="auth-box ">
                             
                                          <div className="card-block">
                                              <div className="row">
                                   
                                                  
                                      
                                              </div>
                                             
                    
                                              <div className="form-group form-primary">
                                                  <input type="text" onChange={handleInputChange} value={data.email} className="form-control" name="email" id="email"  placeholder="Email" style={{fontFamily:"monospace"}}/>
                                       
                                              </div>
                    
                                              <div className="form-group form-primary">
                                                 <input type="password"  onChange={handleInputChange} value={data.npass} className="form-control" name="pass" id="npass" placeholder="Password" style={{fontFamily:"monospace"}} />
                                      
                                              </div>
                    
                                            
                    
                    
                                              <div className="row">
                                                  <div className="col-md-12">
                    
                                            
                                                  <button type="submit" className="btn btn-dark btn-md btn-block waves-effect text-center m-b-20"  value="Submit" style={{ fontFamily: "monospace" }}> Login </button>
                                                  </div>
                                        
                                              </div>
                                    
                    
                                              <div className="or-container"><div class="line-separator"></div> <div class="or-label">or</div><div class="line-separator"></div></div>
                    
                    
                                              <div className="row">
                                                  <div className="col-md-12">
                                                    <a className="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="#!"><img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="error" /> Signup Using Google</a>
                    
                                                  </div>
                                              </div>
                                              <br></br>
                    
                                             
                                          </div>
                                      </div>
                            
                                  </form>
                        
                              </div>
                              
           
                          </div>
                </div>
            </div>
           </div>
            }
         </>
     )
 }
 export default Login;