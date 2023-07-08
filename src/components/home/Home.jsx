import React from 'react'
import './home.scss'
import bg from '../assets/bghero.jpeg'
import logo from '../assets/mblogobg.png'
import Men from '../assets/mens.jpeg'


export const Home = () => {
  return (
    <section className='home'>
        <img src={bg} alt=""/>
      <header className='header'>
      <div className="logo">
        <img src={logo} alt=""/>
      </div>
     
      <div className="account">
        <img src={Men} alt=""/>
        <span>Account</span>
      </div>
    </header>
      <div className='homes'>
        <div className="booking">
          <h3>Where are you going?</h3>
          <input type="text" value="Chamba,Himachal Pradesh."></input>
        </div>
        <div className="checkIn">
          <h3>Check-In</h3>
          <input type="date" value="2023-06-01" min="2023-06-01" max="2026-12-31"></input>
        </div>
        <div className="checkOut">
        <h3>Check-Out</h3>
        <input type="date" value="2023-06-01" min="2023-06-01" max="2026-12-31"></input>
        </div>
        <div className="rooms">
          <h3>Rooms?</h3>
          <input type= "number" value="1"></input>
        </div>
        <div className="searchb">
        <button className='search'>Search</button>
        </div>
      <div className="explore">
        <div className="text">
        <h2>It's Vacation time!</h2>
        <p>Plan your Vacation With Mountbrush Tours, create memorable moments, and find everything that you have been looking for…</p>
      </div>
      <div className="bt">
        <button className='disc'>Discover</button>
      </div>
      </div>
      </div>
    </section>
  )
}

export default Home