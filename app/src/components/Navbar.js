import React from 'react'
import "./Navbar.css"
import checkWhite from "../assest/circle-check-regular.svg"
import homeWhite from "../assest/house-chimney-solid.svg"
import calendarWhite from "../assest/calendar-1.svg"
import logo from "../assest/Logo3.svg"
import calendarBlack from "../assest/calendar-days-regularb.svg"
import homeBlack from "../assest/house-chimney-solidb.svg"
import checkBlack from "../assest/circle-check-regularb.svg"
import { Link } from "react-router-dom";




const Navbar = () => {
  return (
    <header className='header'>
    <div className='nav-container' >
       
          <Link to="/">
           <img className='logo' src={logo} alt="Store" /> 
          </Link>

          <Link to="/">
          <img className='home-icon' src={homeWhite} alt="Store" />
          </Link>
            
          <Link to="/">
          <img className='home-iconb' src={homeBlack} alt="Store" />
          </Link>

          <Link to="/">
          <p className='home-p'>Home</p>
          </Link>
     
      
        <img className='check-icon' src={checkWhite} alt="Store" />

      
        <img className='check-iconb' src={checkBlack} alt="Store" />
       
        
        <Link to="/Checklist"> 
        <p className='check-p'>Tasks</p>
        </Link>
        
        <img className='calendar-icon' src={calendarWhite} alt="Store" />
        <img className='calendar-iconb' src={calendarBlack} alt="Store" />
        <p className='calendar-p'>Dates</p>
    </div>
    <hr />
    
    </header>
  )
}

export default Navbar