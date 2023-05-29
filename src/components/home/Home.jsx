import React from 'react'
import './home.scss'
import bg from '../assets/bghero.jpeg'
import logo from '../assets/mblogobg.png'
import Men from '../assets/men.jpeg'


export const Home = () => {
  return (
    <section className='home'>
       <img src={bg} alt=""/>
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
      <div className='homes'>
        <h1>Mountbrush</h1>
        <div className="glitch" data-glitch="Hosting you soon"></div>
      </div>
    </section>
  )
}

export default Home