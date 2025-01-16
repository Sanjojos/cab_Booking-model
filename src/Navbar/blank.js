import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { useUser } from './userdatafetch';
import { Navbar } from 'react-bootstrap';
import './manage.css';

function Manage() {
  const user = useUser();
  const [formData, setFormData] = useState({ uname: '', email: '', phone: '' });
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setLoading(true);
      axios.get(`http://127.0.0.1:8000/display/${user.id}/`) 
        .then(response => {
          setFormData({ ...response.data });
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [user]);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSave = () => {
    if (user) {
      setLoading(true);
      axios.put(`http://127.0.0.1:8000/update/${user.id}/`, formData, {
        headers: { 'Content-Type': 'application/json' }
      })
        .then(response => {
          setFormData(response.data);
          setEditing(false);
        })
        .catch(error => {
          console.error('Error updating user data:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" id="my-nav">
        <Navbar.Brand className="app-logo" href="/">
          Student Management System
        </Navbar.Brand>
      </Navbar>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-2 sidebar'>
            <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
              <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
                Dashboard
              </CDBSidebarHeader>
              <CDBSidebarContent>
                <CDBSidebarMenu>
                  <NavLink exact to="/dash" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/students" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="list">Students List</CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/manage" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
                  </NavLink>
                </CDBSidebarMenu>
              </CDBSidebarContent>
            </CDBSidebar>
          </div>
          <div className='col-md-10'>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Profile Information</h5>
                {loading ? (
                  <p>Loading...</p>
                ) : editing ? (
                  <form>
                    <div className="form-group">
                      <label htmlFor="uname">Username:</label>
                      <input type="text" className="form-control" id="uname" name="uname" value={formData.uname} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone:</label>
                      <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={handleSave}>Save Changes</button>
                  </form>
                ) : (
                  <div>
                    <div className="form-group">
                      <label htmlFor="uname">Username:</label>
                      <input type="text" className="form-control" id="uname" value={user.uname} readOnly />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input type="email" className="form-control" id="email" value={user.email} readOnly />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone:</label>
                      <input type="tel" className="form-control" id="phone" value={user.phone} readOnly />
                    </div>
                    <button className="btn btn-secondary" onClick={handleEdit}>Edit Profile</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manage;
