import React from 'react'
import {MdCreate} from 'react-icons/md'
import { Link } from 'react-router-dom'
import './Login.css'

const Home = () => {
  return (
    <div>
       <>
       <form>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" />
    </div>
  </div>


  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" />
    </div>
  </div>
 
<button type="submit" class="btn btn-dark">Login</button>
<br /><br />
<div className='register-link'>
<MdCreate className='signin-logo'/>
<Link to = '/Signup' className='login-link'>Register before Login </Link>
</div>


</form>

       </>
    </div>
  )
}

export default Home