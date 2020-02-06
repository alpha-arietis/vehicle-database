import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

export default class EditVehicle extends React.Component {
    
    state = {
        make: '',
        model: '',
        year: '',
        numberPlate: '',
        staff: '',
        ownedOrLeased: '',
        cost: '',
        leaseExp: new Date(),
        regoDue: new Date(),
        warrantDue: new Date(),
        odometer: '',
        odometerDate: new Date()
    }

    componentDidMount() {
        axios.get('http://localhost:5000/vehicles/'+this.props.match.params.id)
        .then(res => {
            this.setState({
                make: res.data.make,
                model: res.data.model,
                year: res.data.year,
                numberPlate: res.data.numberPlate,
                staff: res.data.staff,
                ownedOrLeased: res.data.ownedOrLeased,
                cost: res.data.cost,
                leaseExp: new Date(res.data.leaseExp),
                regoDue: new Date(res.data.regoDue),
                warrantDue: new Date(res.data.warrantDue),
                odometer: res.data.odometer,
                odometerDate: new Date(res.data.odometerDate)
            })
            console.log(res.data.ownedOrLeased)
        })
        .catch(err => console.log(err))
    }

    onChangeMake = (e) => {
        this.setState({
            make: e.target.value
        })
    }

    onChangeModel = (e) => {
        this.setState({
            model: e.target.value
        })
    }

    onChangeYear = (e) => {
        this.setState({
            year: e.target.value
        })
    }

    onChangeNumberPlate = (e) => {
        this.setState({
            numberPlate: e.target.value
        })
    }

    onChangeStaff = (e) => {
        this.setState({
            staff: e.target.value
        })
    }

    onChangeOwnedOrLeased = (e) => {
        this.setState({
            ownedOrLeased: e.target.value
        })
    }

    onChangeCost = (e) => {
        this.setState({
            cost: e.target.value
        })
    }
    
    onChangeLeaseExp = (date) => {
        this.setState({
            leaseExp: date
        })
    }

    onChangeRegoDue = (date) => {
        this.setState({
            regoDue: date
        })
    }

    onChangeWarrantDue = (date) => {
        this.setState({
            warrantDue: date
        })
    }

    onChangeOdometer = (e) => {
        this.setState({
            odometer: e.target.value
        })
    }

    onChangeOdometerDate = (date) => {
        this.setState({
            odometerDate: date
        })
    }
    // NEED TO ADD METHODS FOR ALL FIELDS

    onSubmit = (e) => {
        e.preventDefault()
        const vehicle = {
            make: this.state.make,
            model: this.state.model,
            year: this.state.year,
            numberPlate: this.state.numberPlate,
            staff: this.state.staff,
            ownedOrLeased: this.state.ownedOrLeased,
            cost: this.state.cost,
            leaseExp: this.state.leaseExp,
            regoDue: this.state.regoDue,
            warrantDue: this.state.warrantDue,
            odometer: this.state.odometer,
            odometerDate: this.state.odometerDate
        }

        axios.post('http://localhost:5000/vehicles/update/'+this.props.match.params.id, vehicle)
        .then(res => console.log(res.data))

        window.location = '/vehicle-database/'
    }
    // INSTALL DATEPICKER FOR ALL DATE ENTRIES
    render() {
        return(
            <div style={{width: '40%', margin: '0 auto 0 auto'}}>
                <h3>Edit Vehicle Entry</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Make: </label>
                        <input type='text' 
                        required className='form-control' 
                        value={this.state.make} 
                        onChange={this.onChangeMake}/>
                    </div>
                    <div className='form-group'>
                        <label>Model: </label>
                        <input type='text' 
                        required className='form-control' 
                        value={this.state.model} 
                        onChange={this.onChangeModel}/>
                    </div>
                    <div className='form-group'>
                        <label>Year: </label>
                        <input type='number' 
                        required className='form-control' 
                        value={this.state.year} 
                        onChange={this.onChangeYear}/>
                    </div>
                    <div className='form-group'>
                        <label>Number Plate: </label>
                        <input type='text' 
                        required className='form-control' 
                        value={this.state.numberPlate} 
                        onChange={this.onChangeNumberPlate}/>
                    </div>
                    <div className='form-group'>
                        <label>Staff: </label>
                        <input type='text' 
                        className='form-control' 
                        value={this.state.staff} 
                        onChange={this.onChangeStaff}/>
                    </div>
                    <div className='form-group'>
                        <label>Ownership: </label>
                        <select ref='userInput'
                        className='form-control'
                        onChange={this.onChangeOwnedOrLeased}>
                            <option selected
                            key={this.state.ownedOrLeased}
                            value={this.state.ownedOrLeased}
                            >{this.state.ownedOrLeased}</option>
                            <option 
                            key={this.state.ownedOrLeased === 'Owned' ? 'Leased' : 'Owned'}
                            value={this.state.ownedOrLeased === 'Owned' ? 'Leased' : 'Owned'}
                            >{this.state.ownedOrLeased === 'Owned' ? 'Leased' : 'Owned'}</option>
                        </select>
                    </div>
                    <div className='form-group' style={{display: this.state.ownedOrLeased === 'Leased' ? 'block' : 'none'}}>
                        <label>Lease Expires: </label>
                        <div>
                            <DatePicker
                            selected={this.state.leaseExp}
                            onChange={this.onChangeLeaseExp} />
                        </div>
                    </div>
                    <div className='form-group'>
                        <label>Cost: </label>
                        <input type='number' 
                        className='form-control' 
                        value={this.state.cost} 
                        onChange={this.onChangeCost}/>
                    </div>
                    <div className='form-group'>
                        <label>Rego Due: </label>
                        <div>
                            <DatePicker
                            selected={this.state.regoDue}
                            onChange={this.onChangeRegoDue} />
                        </div>
                    </div>
                    <div className='form-group'>
                        <label>WOF Due: </label>
                        <div>
                            <DatePicker
                            selected={this.state.warrantDue}
                            onChange={this.onChangeWarrantDue} />
                        </div>
                    </div>
                    <div className='form-group'>
                        <label>Odometer Reading: </label>
                        <input type='text' 
                        required className='form-control' 
                        value={this.state.odometer} 
                        onChange={this.onChangeOdometer}/>
                    </div>
                    <div className='form-group'>
                        <label>Odometer Date: </label>
                        <div>
                            <DatePicker
                            selected={this.state.odometerDate}
                            onChange={this.onChangeOdometerDate} />
                        </div>
                    </div>
                    <div className='form-group'>
                    <a href='/vehicle-database/'><button type='button' style={{float: 'left', marginRight: '15px'}} className='btn btn-danger'>Cancel</button></a>
                    </div>
                    <div className='form-group'>
                        <input type='submit' value='Update' className='btn btn-success'/>
                    </div>
                </form>
            </div>
        )
    }
}