import React from 'react'
import { NavLink } from 'react-router-dom'

const Navlinks = () => {
    return (
        <div className='Navlink'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
            <NavLink to="/applications">Applications</NavLink>
            <NavLink to="/clients">Clients</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contacts</NavLink>
        </div>
    )
}

export default Navlinks