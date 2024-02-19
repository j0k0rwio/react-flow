import React from 'react'
import logo from '../assets/AC.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="logo" height={40} />
        <div className='brand'>IMS</div>
        <button className='logout-btn'>Logout</button>
    </div>

    
  )
}

export default Navbar