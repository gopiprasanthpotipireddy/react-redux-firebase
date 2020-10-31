import React from 'react'
import {Link}  from 'react-router-dom'
import SignedinLinks from  './SignedInLinks'
import SignedOutLinks from  './SignedOutLinks'

const Navbar=()=>{

    return (
        <nav className='nav-wrapper grey darken'>
            <div className='container'>
                <Link to='/' className='brand-logo'>Mario Plan</Link>
                
            </div>
            <SignedinLinks></SignedinLinks>
            <SignedOutLinks></SignedOutLinks>

        </nav>
    )
}
export default Navbar