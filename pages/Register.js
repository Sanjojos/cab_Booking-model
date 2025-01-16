import React, { useState } from "react";
import './Reg.css';
import img from '../images/point.JPG';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Reg() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    uname: '',
    email: '',
    npass: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.uname || !data.email || !data.npass || !data.phone) {
      toast.warn("Please fill in all the fields");
      return;
    }

  axios.post(`${process.env.REACT_APP_API_URL}`, data)

      .then((response) => {
        console.log(response.data);
        localStorage.setItem('registeredUser', JSON.stringify(data));
        toast.success("Registration successful");
        navigate("/login");
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 p-3 bg-white shadow box-area">
        <div className="col-md-6 rounded d-flex justify-content-center align-items-center flex-column left-box">
          <div className="featured-image">
            <img src={img} alt='error' className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6 right-box">
          <div className="row">
            <div className="col-sm-12">
              <form className="md-float-material form-material" onSubmit={handleSubmit} style={{ paddingTop: "35px" }}>
                <div className="auth-box">
                  <div className="card-block">
                    <div className="row">
                      <div className="col-md-12">
                        <h1 className="text-center heading" style={{ fontFamily: "monospace" }}>Create Your Account</h1>
                      </div>
                    </div>
                    <div className="form-group form-primary">
                      <input type="text" autoComplete="off" onChange={handleInputChange} value={data.uname} className="form-control" name="name" id="uname" placeholder="Username" style={{ fontFamily: "monospace" }} />
                    </div>
                    <div className="form-group form-primary">
                      <input type="text" autoComplete="off" onChange={handleInputChange} value={data.email} className="form-control" name="email" id="email" placeholder="Email" style={{ fontFamily: "monospace" }} />
                    </div>
                    <div className="form-group form-primary">
                      <input type="password" autoComplete="off" onChange={handleInputChange} value={data.npass} className="form-control" name="pass" id="npass" placeholder="Password" style={{ fontFamily: "monospace" }} />
                    </div>
                    <div className="form-group form-primary">
                      <input type="tel" autoComplete="off" onChange={handleInputChange} value={data.phone} className="form-control" name="phone" id="phone" placeholder="Phone" style={{ fontFamily: "monospace" }} />
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <button type="submit" className="btn btn-dark btn-md btn-block waves-effect text-center m-b-20" value="Submit" style={{ fontFamily: "monospace" }}>Signup Now</button>
                      </div>
                    </div>
                    <div className="or-container">
                      <div className="line-separator"></div>
                      <div className="or-label">or</div>
                      <div className="line-separator"></div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <a className="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="#!">
                          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="error" /> Signup Using Google
                        </a>
                      </div>
                    </div>
                    <br />
                    <p className="text" style={{ fontFamily: "monospace" }}>Already have an account? <Link to="/Login" style={{ color: "blue", textDecoration: "none", fontFamily: "monospace" }}>Login</Link></p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reg;
