import React from 'react'
import { Link } from 'react-router-dom'
import signup from '../images/signup.png'
import './signup.css'
import {RiRegisteredLine} from 'react-icons/ri'

const Signup = () => {
  return (
   <>
     <form>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3" />
    </div>
  </div>
 

  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" />
    </div>
  </div>


  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Mobile Number</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3" />
    </div>
  </div>

  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Profession</label>
    <div class="col-sm-10">
      <input type='text' class="form-control" id="inputEmail3" />
    </div>
  </div>




 
  
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" />
    </div>
  </div>
 

  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Confirm Password
    
    </label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" />
    </div>
  </div>
 
     
     
  
  <button type="submit" class="btn btn-dark">Register</button>

<br /><br />

<Link to = '/login' className='login-link'>
<RiRegisteredLine className='signin-logo'/> 
       Already have an Account </Link>


</form>
 </>
  )
}

export default Signup