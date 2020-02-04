import React from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/navbar.component'
import VehicleList from './components/vehicle-list.component'
import EditVehicle from './components/edit-vehicle.component'
import CreateVehicle from './components/create-vehicle.component'

function App() {
  return (
    <Router>
      <div className='container-fluid'>
      <Navbar/>
      <br/>
      <Route path='/' exact component = {VehicleList}/>
      <Route path='/edit/:id' component = {EditVehicle}/>
      <Route path='/create' component = {CreateVehicle}/>
      </div>
    </Router>
  );
}

export default App;
