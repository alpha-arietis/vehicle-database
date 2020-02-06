import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

require('dotenv').config()

let Vehicle = (props) => (
    <tr>
        <td>{props.vehicle.make}</td>
        <td>{props.vehicle.model}</td>
        <td>{props.vehicle.year}</td>
        <td>{props.vehicle.numberPlate}</td>
        <td>{props.vehicle.staff}</td>
        <td>{props.vehicle.ownedOrLeased}</td>
        <td>{props.vehicle.ownedOrLeased === 'Leased' ? props.vehicle.leaseExp.substring(0,10).split('-').reverse().join('/') : 'NA'}</td>
        <td>${props.vehicle.cost}</td>
        <td className={props.checkRegoDate(props.vehicle.regoDue)}>{props.vehicle.regoDue.substring(0,10).split('-').reverse().join('/')}</td>
        <td className={props.checkWarrantDate(props.vehicle.warrantDue)}>{props.vehicle.warrantDue.substring(0,10).split('-').reverse().join('/')}</td>
        <td>{props.vehicle.odometer}</td>
        <td>{props.vehicle.odometerDate.substring(0,10).split('-').reverse().join('/')}</td>
        <td>
            <Link to={'/vehicle-database/edit/'+props.vehicle._id}>edit</Link> | <a href='#' className='text-danger' onClick={() => {props.deleteVehicle(props.vehicle._id)}}>delete</a>
        </td>
    </tr>
)

export default class VehicleList extends React.Component {
    
    state = {
        vehicles: []
    }
    
    componentDidMount() { // this method adds a list of vehicles from the server (MongoDB) to the state as array
        axios.get(`http://localhost:5000/vehicles`)
        .then(res => {
            this.setState({
                vehicles: res.data
            })
        })
        .catch(err => console.log(err))
    }

    vehicleList = () => {
        return this.state.vehicles.map(currentvehicle => {
            return <Vehicle vehicle={currentvehicle} deleteVehicle={this.deleteVehicle} key={currentvehicle._id} checkRegoDate={this.checkRegoDate} checkWarrantDate={this.checkWarrantDate}/>
        })
    }

    checkRegoDate = (date) => {
        let regoWarning
        let regoIsDue = new Date(date)
        let today = new Date()
        let daysToRego = Math.floor((regoIsDue.getTime() - today.getTime()) / (1000 * 3600 * 24))
        //console.log(daysToRego)
        
        if (daysToRego <= 29 && daysToRego > 14 ) {regoWarning = 'text-warning'} else if (daysToRego <= 14) { regoWarning='text-danger'} else if (daysToRego > 29) {regoWarning = 'text-dark'}
        //console.log(regoWarning)
        
        return regoWarning
    }

    checkWarrantDate = (date) => {
        let warrantWarning
        let warrantIsDue = new Date(date)
        let today = new Date()
        let daysToWarrant = Math.floor((warrantIsDue.getTime() - today.getTime()) / (1000 * 3600 * 24))
        //console.log(daysToWarrant)
        
        if (daysToWarrant <= 29 && daysToWarrant > 14 ) {warrantWarning = 'text-warning'} else if (daysToWarrant <= 14) { warrantWarning='text-danger'} else if (daysToWarrant > 29) {warrantWarning = 'text-dark'}
        //console.log(warrantWarning)
        
        return warrantWarning
    }

    deleteVehicle = (id) => {
        if (window.confirm("Are you sure?")) {
        axios.delete('http://localhost:5000/vehicles/'+id)
        .then(res => console.log(res.data))
        this.setState({
            vehicles: this.state.vehicles.filter(el => el._id !== id)
        })
        }
    }

    render() {
        return(
            <div className='table-responsive'>
                <h3 style={{textAlign: 'center'}}>All Vehicles</h3>
                <table className='table'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Year</th>
                            <th>Plate</th>
                            <th>Staff</th>
                            <th>Ownership</th>
                            <th>Lease Exp</th>
                            <th>Cost</th>
                            <th>Rego Due</th>
                            <th>WOF Due</th>
                            <th>Odo Read</th>
                            <th>Odo Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.vehicleList()}
                    </tbody>
                </table>
            </div>
        )
    }
}