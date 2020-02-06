import React from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {
    render() {
        return(
            <nav className='navbar navbar-dark bg-primary navbar-expand-xl'>
                <Link to='/vehicle-database/' className='navbar-brand'>Vehicle Database</Link>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='navbar-item'>
                            <Link to='/vehicle-database/' className='nav-link'>All Vehicles</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/vehicle-database/create' className='nav-link'>Add Vehicle</Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        0.1.0
                    </span>
                </div>
            </nav>        
        )
    }
}
