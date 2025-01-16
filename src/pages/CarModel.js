import React from "react";
import "./car.css";
import wagonR from '../pages/wagonr.png';
import Dezire from '../pages/dezire.png';
import Xylo from '../pages/xylo.png';
import { FaCar } from "react-icons/fa";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { BsFillLuggageFill } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Car() {
  const navigate=useNavigate();
  
  const handleBookClick = () => {
    navigate('/booking'); 
  };
  return (
    <div className="contact-container"><br/>
     
     <h1>Select your Model</h1>
      {/* WagonR Section */}
      <div className="contact-section">
        
        <div className="contact-left">
          <img src={wagonR} alt='wagonR' className="img-fluid featured-image" id="im" />
          <button className='btn1' onClick={handleBookClick}>Book</button>
        </div>
        <div className="contact-right">
          <h2>Hatchback</h2>
          <div className="line-separator"></div>
          <p><FaCar /> 1 unit</p>
          <p><MdOutlineAirlineSeatReclineExtra /> 5 seats</p>
          <p><BsFillLuggageFill /> 2 luggage</p>
          <p><FaRupeeSign /> 704</p>
        </div>
      </div>

      {/* Dezire Section */}
      <div className="contact-section">
        <div className="contact-left">
          <img src={Dezire} alt='Dezire' className="img-fluid featured-image" id="im" />
          <button className='btn1' onClick={handleBookClick}>Book</button>
        </div>
        <div className="contact-right">
          <h2>Sedan</h2>
          <div className="line-separator"></div>
          <p><FaCar /> 1 unit</p>
          <p><MdOutlineAirlineSeatReclineExtra /> 5 seats</p>
          <p><BsFillLuggageFill /> 2 luggage</p>
          <p><FaRupeeSign /> 752</p>
        </div>
      </div>

      {/* Xylo Section */}
      <div className="contact-section">
        <div className="contact-left">
          <img src={Xylo} alt='Xylo' className="img-fluid featured-image" id="im" />
          <button className='btn1' onClick={handleBookClick}>Book</button>
        </div>
        <div className="contact-right">
          <h2>Xylo</h2>
          <div className="line-separator"></div>
          <p><FaCar /> 1 unit</p>
          <p><MdOutlineAirlineSeatReclineExtra /> 5 seats</p>
          <p><BsFillLuggageFill /> 2 luggage</p>
          <p><FaRupeeSign/> 752</p>
        </div>
      </div>
    </div>
  );
}

export default Car;
