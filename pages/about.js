import React from "react";
import './about.css';

function About() {
  return (
    <>
      <div >
        <section id='about'>
          <div className='content'>
            <h1>About Us</h1>
          </div>
        </section>
        <section className="ab">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p className="about-paragraph">
                  Welcome to HEY.TAXI, your reliable and easy-to-use cab booking service designed to make your travel hassle-free! Whether you need a quick ride to work, a smooth airport transfer, or a leisurely trip around the city, we’ve got you covered. With a focus on safety, comfort, and affordability, we connect riders with professional drivers to ensure timely pickups and a stress-free journey. Our user-friendly platform allows you to book cabs in just a few clicks, offering real-time tracking and secure payment options. Experience seamless travel with HEY.TAXI, where every ride matters!
                </p>
              </div>
            </div>
          </div>
        </section>
        <card>
        <section className="contact-form-section" >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Contact Us</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      </card>
      </div>
    </>
  );
}

export default About;
