import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { IoIosArrowUp } from "react-icons/io";
import image from '../images/taxi.jpg';
import { FaClock } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";
import { IoCaretForwardSharp } from "react-icons/io5";
import taxi1 from '../images/cab.jpg'
import taxi2 from '../images/cab2.png'
import taxi3 from '../images/cab3.jpg'
import flatpickr from 'flatpickr';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { HiSwitchHorizontal } from "react-icons/hi";






function Home(){
  const navigate = useNavigate(); 


  
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleBooking = () => {
    if (!pickupLocation || !destination || !date || !time) {
      alert("Please fill all fields");
    } else {
      console.log("Booking Successful", { pickupLocation, destination, date, time });
      navigate('/car'); 
    }
  };
  
    return(
  
  <>

    <section id='home'>
      <div className='content'>
      <h1>Taxi Services in Thrissur with Hey.Taxi</h1>
      <p>
        Welcome to the ride option that’s ready when you are. You can request a ride when you need to travel  in Thrissur.
         You’ll also enjoy 24x7 requesting, helpful in-app safety features, and upfront pricing to budget ahead for your trip.
      </p>
      </div>
      
      <div className='homeCard grid'>
          <div className='locationDiv'>
            <input
              type='text'
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              placeholder='PickUp Location'
              required
            />
          </div>

          <div className='DestinationDiv'>
            <input
              type='text'
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder='Destination'
              required
            />
          </div>

          <div className='DateDiv'>
            <input
              type="date" id="start" name="trip-start"  min="2024-01-01" max="2024-12-31"
             
              onChange={(e) => setDate(e.target.value)}
              placeholder='Pick date'
              required
            />
          </div>

          <div className='TimeDiv'>
            <input
              type='time'
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder='Time'
              required
            />
          </div>

          <button className='searchb' onClick={handleBooking}>
            Book
          </button>
        </div>
</section>
  
  <div className="container" id='cardc'  >
  
    <div className="row row-cols-1 row-cols-md-3 g-4 pt-5"  style={{position:"relative",top:"250px"}}>
      <div className="col">
        <div className="card " style={{width:"350px",marginLeft:"50px",backgroundColor:"rgb(238, 245, 255)"}}  >
         <div className='card-body'>
          <h4 className='card-title'>
          <b><FaClock /> 24*7 Services & requesting</b>
          </h4>
          <p>Experience taxi-like services and more in kerala by requesting a ride with the Hey.Taxi, you can request a ride on demand at any time and on any day.</p>
         </div>


        </div>
      </div>
      <div className="col">
        <div className="card" style={{width:"350px",marginLeft:"50px",height:"213px",backgroundColor:"rgb(238, 245, 255)"}}   >
        <div className='card-body'>
        <h4 className='card-title'>
          <b> <MdSecurity /> Security Features</b>
          </h4>
          <p>Hey.Tax prioritizes safety for every rider in Thrissur. In a few taps, you can access customer support and share trip details with loved ones. View driver profiles, too, to see ratings and more to get to know your driver before the trip begins.</p>
         </div>


        </div>
      </div>
      <div className="col">
        <div className="card " style={{width:"350px",marginLeft:"50px",height:"213px",backgroundColor:"rgb(238, 245, 255)"}} >
        <div className='card-body'>
        <h4 className='card-title'>
          <b><FcMoneyTransfer /> Upfront price estimates</b>
          </h4>
          <p>You can view upfront price estimates at the beginning of every ride. Note: the price may be adjusted at the end of the trip if surcharges or tolls differ from the estimated upfront price.</p>
         </div>
         </div>
      </div>
      </div>
      </div>
     <div className='section' style={{position:"relative",top:"250px"}} id='que'>
     {/* <div class="line-separator" ></div><br/> */}
      <div class="row " style={{color:"white"}}>
        <div className="col-md-4" style={{paddingleft: "40px"}}>
          <h5 style={{textAlign:"left"}}><b><IoCaretForwardSharp />Hassle-Free Cab Booking with Hey.Taxi</b></h5>
        </div><br/><br/>
        <h6  style={{marginRight:"0px",textAlign:"left"}}>Are you tired of the never-ending struggle to book a cab online, especially during unfavorable weather conditions or in emergency situations? Look no further! Hey.Taxi is here to provide you with a seamless
        and convenient solution for all your cab booking needs. As a customer-centric company, we strive to deliver the best services to our travellers, ensuring a stress-free journey every time.</h6><br/>
        <div className="col-md-4" style={{paddingleft: "10px",paddingTop:"10px"}}>
          <h5 style={{textAlign:"left"}}><b><IoCaretForwardSharp />Simplified Cab Booking process</b></h5>
        </div>
        <h6 style={{marginRight:"0px",textAlign:"left"}}>At Hey.Taxi, we have designed an intuitive and user-friendly interface to enhance your online cab booking experience.<br/>  Our platform offers a straightforward and effortless process, allowing you to book a cab in just a few clicks.</h6>
        <div className="col-md-4" style={{paddingleft: "10px",paddingTop:"10px"}}>
          <h5 style={{textAlign:"left"}}><b><IoCaretForwardSharp />Your Ride, Our Priority</b></h5>
        </div>
        <h6 style={{marginRight:"0px",textAlign:"left"}}>When you book a cab with Hey.Taxi, we prioritize your safety, comfort, and satisfaction. Our dedicated team ensures that every aspect of your journey is well taken care of, from the moment you make the booking until you reach your destination. With our experienced drivers and well-maintained vehicles, you can relax and enjoy a easy-going ride.</h6>
        <div className="col-md-4" style={{paddingleft: "10px",paddingTop:"10px"}}>
          <h5 style={{textAlign:"left"}}><b><IoCaretForwardSharp />Variety of Cabs and Discounts</b></h5>
        </div>
        <h6 style={{marginRight:"0px",textAlign:"left"}}>At Hey.Taxi, we believe in providing our customers with a wide selection of cab options to cater to their diverse needs. Our extensive network consists of 4000+ cab operators through different vendors, ensuring you always have a reliable and comfortable mode of transportation available. Choose from a range of categories, including Hatchbacks, sedans, SUVs, and more, depending on your preferences and group size.

        Moreover, we understand the value of saving money while traveling. That's why Hey.Taxi offers discounted rates on Cab services. By booking through our platform, you can enjoy cost-effective cab rides without compromising on quality and reliability.</h6>
        <div className="col-md-4" style={{paddingleft: "10px",paddingTop:"10px"}}>
          <h5 style={{fontFamily:"monospace",textAlign:"left"}}><b><IoCaretForwardSharp />Book Your Cab with Hey.Taxi Today!</b></h5>
        </div>
        <h6 style={{marginRight:"0px",textAlign:"left"}}>When you book a cab with Hey.Taxi, we prioritize your safety, comfort, and satisfaction. Our dedicated team ensures that every aspect of your journey is well taken care of, from the moment you make the booking until you reach your destination. With our experienced drivers and well-maintained vehicles, you can relax and enjoy a easy-going ride.</h6><br/><br/>
        {/* <div class="line-separator" ></div> */}
     </div>
     </div>
    
     <section className='carousel-section'>
        
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={taxi1} className="d-block w-100" alt="Slide 1" />
              <div className="carousel-caption d-none d-md-block">
                <h1 style={{fontFamily:"fantasy",color:"black",backgroundColor:"white"}}>Upto 15% Off on Your First Booking</h1>
           
              </div>
            </div>
            <div className="carousel-item">
              <img src={taxi2} className="d-block w-100" alt="Slide 2" />
              <div className="carousel-caption d-none d-md-block">
                <h1 style={{fontFamily:"fantasy",color:"black",backgroundColor:"white"}} >100% CashBack on Cab Bookings,+25% upto Rs 500 instant off</h1>
             <p></p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={taxi3} className="d-block w-100" alt="Slide 3" />
              <div className="carousel-caption d-none d-md-block">
                <h1 style={{fontFamily:"fantasy",color:"black",backgroundColor:"white"}}>Pay only 15% for Assured Booking and the rest to the cab driver</h1>
                <p></p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
<section className="intro" style={{position:"relative",top:"-100px"}}>
  <div class=" h-100">
    <div class="mask d-flex align-items-center h-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12" bg-white rounded shadow>
            <div class="table-responsive bg-white">
              <table class="table mb-0">
                <thead>
                  <tr>
                    <th scope="col"> Top Cab Routes from Thrissur</th>
                    <th scope="col">Included kms & Extra Fare</th>
                    <th scope="col">Cab Price</th>
                   
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" style={{color: "#666666"}}>Thrissur to Guruvayur Cabs (26 kms) </th>
                    <td>26 kms included (extra fare 15rs after 26 kms)</td>
                    <td>567 Rs</td>
                    
                  </tr>
                  <tr>
                    <th scope="row" style={{color: "#666666"}}>Thrissur to chalakudy Cabs (30 kms)</th>
                    <td>30 kms included (extra fare 22.5Rs after 30 kms)</td>
                    <td>1903 Rs</td>
                    
                  </tr>
                  <tr>
                    <th scope="row" style={{color: "#666666"}}>Thrissur to Cochin Airport Cabs (54 kms)</th>
                    <td>54 kms included ( extra fare 22.5Rs after 54 kms)</td>
                    <td>2900</td>
                    
                   
                  </tr>
                  <tr>
                    <th scope="row" style={{color: "#666666"}}>Thrissur to Tirur Cabs (67 kms)</th>
                    <td>67 kms included ( extra fare 15Rs after 67 kms)</td>
                    <td>1905</td>
                    
                  </tr>
                  <tr>
                    <th scope="row" style={{color: "#666666"}}>Thrissur to coimbatore Cabs (114 kms)</th>
                    <td>114 kms included ( extra fare 22.5Rs after 114 kms)</td>
                    <td>1500</td>
                  
                  </tr>
                  <tr>
                    <th scope="row" style={{color: "#666666"}}>Thrissur to Kozhikode Cabs (126 kms) </th>
                    <td>126 kms included ( extra fare 22.5 Rs after 126 kms)</td>
                    <td>2000</td>
                   
                  </tr>
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<div className='container' style={{position:"relative",top:"-10px"}} id='faq'>
<div className='row'>
<div className='col-lg-7' style={{paddingTop:"13px"}}>
  <h2 style={{fontFamily:"monospace"}}><b>Frequently asked questions</b></h2>




<div className="faq">
<div className="faq-question">
<input id="q1" type="checkbox" className="panel"/>
<div className="plus"><IoIosArrowUp /></div>
<label for="q1" className="panel-title">What do I do if I forget an item in a ride with Hey.Taxi?</label>
<div className="panel-content">You can use our website to contact the Help desk regarding the lost item.  </div>
</div>

<div className="faq-question" style={{position:"relative",bottom:"20px"}}>
<input id="q2" type="checkbox" className="panel"/>
<div className="plus"><IoIosArrowUp /></div>
<label for="q2" className="panel-title">Is it safe to request a ride with Hey.Taxi in Thrissur?</label>
<div className="panel-content">Safety is a top priority for every ride with Hey.Taxi. With the Hey.Taxi app, we bring  enhanced ridecheck safety features to Indian markets. access the emergency assistance button to call local authorities, and explore more safety features, all from the Hey.Taxi app.</div>
</div>

<div className="faq-question" style={{position:"relative",bottom:"30px"}}>
<input id="q3" type="checkbox" className="panel"/>
<div className="plus"><IoIosArrowUp /></div>
<label for="q3" className="panel-title">Can I change my trip after requesting a ride in Thrissur with Hey.Taxi?</label>
<div className="panel-content">Yes, you can change your trip details after requesting a ride in Thrissur with Hey.Taxi.</div>
</div>

<div className="faq-question" style={{position:"relative",bottom:"30px"}}>
<input id="q4" type="checkbox" className="panel"/>
<div className="plus"><IoIosArrowUp /></div>
<label for="q4" className="panel-title">Is There any Convenience Charge on Cab Bookings made via the Web/App?</label>
<div className="panel-content">Absolutely not! At Hey.Taxi we highly believe in not charging any convenience fee on online cab bookings made via the web portal or app.</div>
</div>

<div className="faq-question" style={{position:"relative",bottom:"30px"}}>
<input id="q5" type="checkbox" className="panel"/>
<div className="plus"><IoIosArrowUp /></div>
<label for="q5" className="panel-title">Do you Offer Multiple Pickups Or Drops?</label>
<div className="panel-content">At present, we only provide pick up and drop at one point but very soon, we will introduce other options like multiple pickups and drops. Very soon, we will introduce more segments in cabs.</div>
</div>
</div>


</div>
<div className='col-md-2' style={{paddingBottom:"100px"}} >
<img src={image} alt='error' ></img>
</div>

</div>
</div>



</>



)
}
export default Home;


