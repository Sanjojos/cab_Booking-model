import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// import axios from 'axios';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import './manage.css';

function Manage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    uname: '',
    email: '',
    npass: '',
    phone: ''
  });

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('registeredUser'));
    if (loggedInUser) {
      setUser(loggedInUser);
    } else {
      toast.warn("No user logged in");
      navigate('/login');
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser, [id]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem('registeredUser', JSON.stringify(user));
    localStorage.setItem('loggedInUser', JSON.stringify(user));  
    toast.success("Profile updated successfully");
};


  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    toast.success("Logged out successfully");
    navigate('/login');
  };

  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="lg" id="my-nav">
      <Navbar.Brand className="app-logo" href="/">
        Student Management System
      </Navbar.Brand>
    </Navbar>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 sidebar">
          <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
            <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
              Dashboard
            </CDBSidebarHeader>
            <CDBSidebarContent>
              <CDBSidebarMenu>
                <NavLink exact to="/dash" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/manage" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
                </NavLink>
              </CDBSidebarMenu>
            </CDBSidebarContent>
          </CDBSidebar>
        </div>
        <div className="col-md-8 offset-md-2">
          <div className="card shadow p-4 mb-4 bg-white rounded">
            <h3 className="text-center mb-4" style={{ fontFamily: "monospace" }}>Your Profile</h3>
            <form onSubmit={handleSave}>
              <div className="form-group">
                <input type="text"autoComplete="off"onChange={handleInputChange}value={user.uname}className="form-control"id="uname"placeholder="Username"style={{ fontFamily: "monospace" }}/>
              </div>
              <div className="form-group">
                <input type="email"autoComplete="off"onChange={handleInputChange}value={user.email}className="form-control"id="email"placeholder="Email"style={{ fontFamily: "monospace" }}/>
              </div>
              <div className="form-group">
                <input type="password"autoComplete="off"onChange={handleInputChange}value={user.npass}className="form-control"id="npass"placeholder="Password"style={{ fontFamily: "monospace" }}/>
              </div>
              <div className="form-group">
                <input type="tel"autoComplete="off"onChange={handleInputChange}value={user.phone}className="form-control"id="phone"placeholder="Phone"style={{ fontFamily: "monospace" }}/>
              </div>
              <div className="d-flex justify-content-between mt-4">
                <button type="submit"className="btn btn-dark btn-block"style={{ fontFamily: "monospace" }}>Save Changes</button>
                <button type="button"className="btn btn-light"onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Manage;
