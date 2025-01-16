import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import {NavLink} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';
import './profile.css';

function Dashboard() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" id="my-nav">
        <Navbar.Brand className="app-logo" href="/">
        hey.Taxi
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
                  <NavLink exact to="/manage" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
                  </NavLink>
                </CDBSidebarMenu>
              </CDBSidebarContent>
            </CDBSidebar>
          </div>
          <div className='col-md-10'>
            <h1> History</h1>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Location</th>
                    <th scope="col">Destination</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>9/9/24</td>
                    <td>ollur</td>
                    <td>chalakudy</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>10/10/24</td>
                    <td>chalakudy</td>
                    <td>Thrissur</td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
