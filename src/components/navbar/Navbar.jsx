import React from 'react'
import './navbar.scss'
import logo from '../assets/mblogobg.png'
import Men from '../assets/men.jpeg'

const Navbar = () => {
  return (
    <header className='header'>
      <div className="logo">
        <img src={logo} alt=""/>
      </div>
      <div className="links">
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Home">Destinations</a></li>
          <li><a href="#Home">Gallery</a></li>
          <li><a href="#Home">Booking</a></li>
        </ul>
      </div>
      <div className="account">
        <img src={Men} alt=""/>
        <span>Account</span>
      </div>
    </header>
  )
}

export default Navbar