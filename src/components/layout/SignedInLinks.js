import React from 'react'
import {NavLink}  from 'react-router-dom'

const SignedLinks=()=>{

    return (
        
        <ul className='right'>
            <li><NavLink to='/create'>NewProject</NavLink></li>
            <li><NavLink to='/'>LogOut</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten1'>NN</NavLink></li>
        </ul>
       
    )
}
export default SignedLinks