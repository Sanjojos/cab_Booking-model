
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
 import Reg from './pages/Register';
import Foot from './pages/foot';
import About from './pages/about';
import Car from './pages/CarModel';
import Dashboard from './pages/profile';
// import History from './pages/history';
import { ToastContainer } from 'react-toastify';
import Manage from './pages/manage';
import PrivateRoute from './pages/privateroute';
import Booking from './pages/booking';




// import Footersect from './pages/footer';
function App() {
  return (
    <div className="App">
      
<ToastContainer></ToastContainer>      
<Navbar/>
 <Routes>
 <Route path='/'element={<Home/>}/>
 <Route path='Login'element={<Login/>}/>
 <Route path='Regstr'element={<Reg/>}/>
 <Route path='about' element={<About/>}/>
 <Route path='/car' element={<Car/>}/>
 <Route path='dash' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
 <Route path='manage' element={<PrivateRoute><Manage/></PrivateRoute>}/>
 <Route path='/booking'element={<Booking/>}/>

</Routes>

<Foot/>
    </div>
  );
}

export default App;
