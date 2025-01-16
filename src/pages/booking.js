import React, { useState } from 'react'
import "./booking.css";
import axios from 'axios';
import { toast } from "react-toastify"
import { useNavigate } from 'react-router-dom';
const Booking = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    fname: '',
    lname: '',
    currentloc: '',
    destination: '',
    emails:'',
    mobile:'',
    addinfo:''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setDetails((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!details.fname || !details.lname || !details.currentloc || !details.destination || !details.emails || !details.mobile || !details.addinfo) {
      toast.warn("Please fill in all the fields");
      return;
    }

    axios.post("http://127.0.0.1:8000/book/", details)
      .then((response) => {
        console.log(response.data);
       
        toast.success("Booking successful");
        navigate("/");
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div>
       <div >
       
    <div     className="booking-section">
  <div className="container"><br/>
    <div className="row justify-content-center"><br/>
      <h2 className="text-center">Contact Details</h2>
      <form className="col-lg-8 col-md-10" action='' method='POST' onSubmit={handleSubmit}>
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="form-outline">
              <input type="text" id='fname'  onChange={handleInputChange} value={details.fname} className="form-control" placeholder="Enter your first name"/>
              <label htmlFor="firstName"  className="form-label">First name</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-outline">
              <input type="text" id="lname" onChange={handleInputChange} value={details.lname} className="form-control" placeholder="Enter your last name"   />
              <label htmlFor="lastName"  className="form-label" >Last name</label>
            </div>
          </div>
        </div>

        <div className="form-outline mb-4">
          <input type="text" id="currentloc" onChange={handleInputChange} value={details.currentloc} className="form-control" placeholder="Enter your Current location"   />
          <label htmlFor="companyName"  className="form-label">Current location</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" id="destination" onChange={handleInputChange} value={details.destination} className="form-control" placeholder="Enter your Destination"  />
          <label htmlFor="address"  className="form-label">Destination</label>
        </div>

        <div className="form-outline mb-4">
          <input type="email" id="emails"  onChange={handleInputChange} value={details.emails} className="form-control" placeholder="Enter your email"  />
          <label htmlFor="email"  className="form-label">Email</label>
        </div>

        <div className="form-outline mb-4">
          <input type="tel" id="mobile" onChange={handleInputChange} value={details.mobile} className="form-control" placeholder="Enter your phone number"  />
          <label htmlFor="phone"  className="form-label">Phone</label>
        </div>

        <div className="form-outline mb-4">
          <textarea className="form-control" onChange={handleInputChange} value={details.addinfo} id="addinfo" rows="4" placeholder="Enter any additional information"></textarea>
          <label htmlFor="additionalInfo"  className="form-label">Additional information</label>
        </div>

        <button type="submit" className="btn btn-primary btn-block" value="Submit">Confirm Booking</button>
      </form>
    </div>
  </div>
</div>

    </div>
    </div>
  )
}

export default Booking
