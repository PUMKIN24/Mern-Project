import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'
import logo3 from '../images/logo3.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <nav class ="navbar navbar-expand-lg navbar-light bg-light">
  <div className ="container-fluid">
    <a class ="navbar-brand" href="#">
      <img class="logo2" src={logo3} alt="" />
    </a>
    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className ="navbar-toggler-icon"></span>
    </button>
    <div className ="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className ="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className ="nav-item">
          <Link className ="nav-link" to="/">HOME</Link>
        </li>
        <li className ="nav-item">
          <Link className ="nav-link" to="/about">ABOUT</Link>
        </li>
        <li className ="nav-item">
          <Link className ="nav-link" to="/contact">CONTACT</Link>
        </li>
        <li className ="nav-item">
          <Link className ="nav-link" to="/login">LOGIN</Link>
        </li>
        <li className ="nav-item">
          <Link className ="nav-link" to="/signup">REGISTER</Link>
        </li>
        
       
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar